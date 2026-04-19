@echo off
setlocal

REM Di chuyen vao dung thu muc chua file .bat
pushd "%~dp0"

REM Kiem tra Node.js
where node >nul 2>nul
if errorlevel 1 (
  echo [LOI] Chua tim thay Node.js.
  echo Vui long cai Node.js LTS tai https://nodejs.org roi chay lai file nay.
  pause
  exit /b 1
)

echo Dang chuan bi thu vien (neu chua co)...
if not exist node_modules (
  call npm install
  if errorlevel 1 (
    echo [LOI] Khong cai duoc thu vien.
    pause
    exit /b 1
  )
)

start "" http://localhost:5173
echo Dang chay website tai http://localhost:5173
echo De dung: quay lai cua so nay va bam Ctrl + C
echo.

call npm run dev

popd
endlocal
