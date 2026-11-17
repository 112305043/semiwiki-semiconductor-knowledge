# SemiWiki 半導體產業知識庫

SemiWiki 是一個以繁體中文介紹半導體產業的靜態網站，將 ASIC、IC 設計、晶圓代工與代表企業等主題整理成適合入門閱讀的內容。

## 專案目的

- 建立容易理解的半導體產業知識入口。
- 說明晶片設計、製造與應用之間的關係。
- 以簡潔、易讀的方式呈現產業資訊，並提供延伸參考資料。

## 主要功能

- **首頁**：半導體產業概覽、產業知識卡片、企業介紹入口與文章搜尋。
- **ASIC 產業介紹**：說明 ASIC 定義、設計流程、應用、產業鏈、商業模式、優勢限制及與 GPU 的比較。
- **Broadcom 企業介紹**：整理公司沿革、半導體產品、客製化 ASIC、AI／資料中心角色、商業模式與發展機會。
- **文章搜尋**：可輸入關鍵字即時篩選首頁文章，也可使用搜尋按鈕或 Enter 鍵。
- **響應式介面**：支援桌面與手機瀏覽，手機版提供導覽選單。

## 使用技術

- HTML5：頁面結構與內容。
- CSS3：共用視覺樣式、資訊卡片、表格與響應式排版。
- 原生 JavaScript：手機導覽選單與首頁文章搜尋。

本專案不使用 React、Vue、資料庫或其他前端框架，也不需要安裝套件。

## 專案資料夾結構

```text
semiwiki/
├── AGENTS.md
├── README.md
├── index.html
├── assets/
│   └── images/             # 圖片目錄，目前沒有使用中的圖片檔
├── css/
│   └── style.css
├── js/
│   └── main.js
└── pages/
    ├── companies.html      # Broadcom 公司介紹
    └── industry.html       # ASIC 與半導體產業介紹
```

網站頁面共用 `css/style.css` 與 `js/main.js`。子目錄頁面使用 `../` 回到專案根目錄，避免 GitHub Pages 專案路徑下的資源連結失效。

## 在本機開啟網站

1. 下載或複製專案檔案到本機。
2. 使用瀏覽器開啟根目錄的 `index.html`。
3. 也可在 VS Code 安裝 Live Server 等本機靜態伺服器擴充套件後預覽；這不是必要依賴。

首頁搜尋與頁面導覽可直接在瀏覽器測試；參考資料連結需要網路連線。

## 部署到 GitHub Pages

請使用自己已建立的 GitHub Repository；本專案不會自動建立 Repository 或變更 Git 設定。

1. 將專案檔案放在 Repository 根目錄，確認 `index.html` 位於根目錄。
2. 將變更推送到 GitHub 上的分支（例如 `main`）。
3. 開啟 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. 選擇要部署的分支及資料夾（通常為 `main` 與 `/(root)`），按 **Save**。
6. 等待部署完成後，從 Pages 設定頁開啟網站網址。

網站使用相對路徑連結，例如 `css/style.css`、`pages/industry.html` 及子頁中的 `../css/style.css`，可支援 GitHub Pages 的 Repository 子路徑。若未來新增頁面或資源，請沿用相對路徑並檢查連結。

## AGENTS.md 與 AI 開發規範

根目錄的 `AGENTS.md` 是提供 AI 開發工具參照的專案指引檔。目前檔案記錄專案資料夾結構，沒有另外列出更細的程式碼規範。

開始 AI 輔助開發前，應先閱讀 `AGENTS.md`，並沿用專案既有的 HTML、CSS 與 JavaScript 寫法。開發時建議：

- 只修改與需求直接相關的檔案，保留既有首頁內容及功能。
- 優先重用共用 CSS；新增樣式時使用頁面專屬命名，避免影響其他頁面。
- 維持繁體中文、白色簡約風格及既有導覽列與頁尾。
- 使用相對路徑，不引入未經需求要求的框架或依賴。
- 完成後檢查本機連結、頁面錨點、CSS／JavaScript 路徑、手機版排版與相關互動功能。
- 若要新增或調整專案規範，應在 `AGENTS.md` 明確記錄，避免 README 與實際指引不一致。

## 已知尚未完成項目

- 首頁的 AI 產業分析卡片連到 `pages/analysis.html`，目前該頁尚未建立。
- 首頁的專業名詞按鈕連到 `pages/glossary.html`，目前該頁尚未建立。
- 首頁 NVIDIA、MediaTek、TSMC 卡片指向 `pages/companies.html#nvidia`、`#mediatek`、`#tsmc`，目前 `companies.html` 只有 Broadcom 介紹，因此這三個錨點尚未建立。

首頁導覽、ASIC 頁面連結及 Broadcom 頁面連結已具備對應內容；以上待辦連結不影響這些頁面本身的瀏覽。