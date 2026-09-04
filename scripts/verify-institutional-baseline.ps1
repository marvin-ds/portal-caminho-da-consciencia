# verify-institutional-baseline.ps1
# Verifica integridade semântica do site institucional
# Uso: .\scripts\verify-institutional-baseline.ps1

param (
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$pass = 0
$fail = 0
$results = @()

function Check {
    param([string]$Id, [string]$Description, [bool]$Result, [string]$Detail = "")
    if ($Result) {
        $script:pass++
        $results += [PSCustomObject]@{ Id=$Id; Status="PASS"; Description=$Description; Detail=$Detail }
    } else {
        $script:fail++
        $results += [PSCustomObject]@{ Id=$Id; Status="FAIL"; Description=$Description; Detail=$Detail }
    }
}

# ── Arquivos obrigatórios ──────────────────────────────────────────────────────
$required = @(
    "index.html"
    "mapeamento/index.html"
    "termos-de-uso.html"
    "politica-de-privacidade.html"
    "favicon.ico"
    "robots.txt"
    "sitemap.xml"
    "netlify.toml"
    "assets/brand/logos/logo-simbolo.png"
)
foreach ($f in $required) {
    $exists = Test-Path (Join-Path $Root $f)
    Check "FILE-$(($f -replace '/', '-' -replace '\.', '_').ToUpper())" "Arquivo obrigatório: $f" $exists
}

# ── Home: proteção de infra ────────────────────────────────────────────────────
$homeHtml = Get-Content (Join-Path $Root "index.html") -Raw -ErrorAction SilentlyContinue

Check "HOME-GTM"       "Home contém GTM"                ($homeHtml -match "GTM-WC2C397G")
Check "HOME-GA4"       "Home contém GA4"                ($homeHtml -match "googletagmanager\.com")
Check "HOME-PIXEL"     "Home contém Meta Pixel"         ($homeHtml -match "fbq\('init'")
Check "HOME-CANONICAL" "Home contém canonical tag"      ($homeHtml -match '<link rel="canonical"')
Check "HOME-OG"        "Home contém OG tags"            ($homeHtml -match 'property="og:')
Check "HOME-JSONLD"    "Home contém JSON-LD"            ($homeHtml -match 'application/ld\+json')
Check "HOME-PAGE-ID"   "Home contém PAGE_ID tracking"  ($homeHtml -match "portal_home_v1")

# ── Mapeamento: separação Sintonize ───────────────────────────────────────────
$map = Get-Content (Join-Path $Root "mapeamento/index.html") -Raw -ErrorAction SilentlyContinue

$sintonize_embedded = $false
$patterns_forbidden = @(
    "a Mesa pode entrar no seu Mapeamento"
    "o Mapeamento pode incluir a Mesa"
    "a Sintonize é recurso do Mapeamento"
    "R\$197 inclui Sintonize"
    "class=""sintonize-card"""
    'class="sintonize-card"'
    "sintonize-card"
)
foreach ($p in $patterns_forbidden) {
    if ($map -match [regex]::Escape($p)) {
        $sintonize_embedded = $true
        Check "MAP-SINTONIZE-EMBEDDED" "Mapeamento NÃO deve conter: $p" $false $p
    }
}
if (-not $sintonize_embedded) {
    Check "MAP-SINTONIZE-CLEAN" "Mapeamento não contém Sintonize embutida" $true
}

# A Sintonize pode aparecer apenas como "oferta distinta"
$sintonize_ok = ($map -match "oferta distinta|experiência distinta|experiências diferentes|oferta separada|caminho separado")
Check "MAP-SINTONIZE-DISTINCT" "Mapeamento refere Sintonize como oferta distinta (quando menciona)" `
    ($map -notmatch "sintonize" -or $sintonize_ok)

# FAQ específico de separação
Check "MAP-FAQ-SINTONIZE" "FAQ inclui pergunta de separação Mapeamento/Sintonize" `
    ($map -match "faq-q4" -and $map -match "inclui a Mesa Radiônica")

# ── Termos: preços e entregáveis ──────────────────────────────────────────────
$terms = Get-Content (Join-Path $Root "termos-de-uso.html") -Raw -ErrorAction SilentlyContinue

Check "TERMS-PRICE-197"     "Termos mencionam R\$ 197"           ($terms -match "R\$\s*197")
Check "TERMS-NO-297"        "Termos NÃO mencionam R\$ 297"       ($terms -notmatch "R\$\s*297")
Check "TERMS-NO-397"        "Termos NÃO mencionam R\$ 397"       ($terms -notmatch "R\$\s*397")
Check "TERMS-AUDIO"         "Termos mencionam áudio de devolutiva" ($terms -match "áudio pessoal de devolutiva|áudio personalizado")
Check "TERMS-MAPA"          "Termos mencionam mapa de recorrências" ($terms -match "mapa de recorrências")
Check "TERMS-SINTONIZE-SEP" "Termos contêm separação Sintonize"   ($terms -match "oferta distinta do Mapeamento|oferta distinta do Mapeamento Padrão")
Check "TERMS-PI-TERCEIROS"  "Termos contêm carve-out PI terceiros" ($terms -match "metodologia específica de terceiros")

# ── Resultado ─────────────────────────────────────────────────────────────────
Write-Host ""
Write-Host "══════════════════════════════════════════════"
Write-Host " INSTITUTIONAL BASELINE VERIFICATION"
Write-Host "══════════════════════════════════════════════"

foreach ($r in $results) {
    $color = if ($r.Status -eq "PASS") { "Green" } else { "Red" }
    $detail = if ($r.Detail) { "  → $($r.Detail)" } else { "" }
    Write-Host "[$($r.Status)] $($r.Id): $($r.Description)$detail" -ForegroundColor $color
}

Write-Host ""
Write-Host "══════════════════════════════════════════════"
$totalColor = if ($fail -eq 0) { "Green" } else { "Red" }
Write-Host "PASS: $pass | FAIL: $fail | TOTAL: $($pass + $fail)" -ForegroundColor $totalColor
if ($fail -gt 0) {
    Write-Host "STATUS: FALHOU — corrigir antes do deploy" -ForegroundColor Red
    exit 1
} else {
    Write-Host "STATUS: OK — baseline íntegra" -ForegroundColor Green
    exit 0
}
