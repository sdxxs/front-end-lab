
const $ = (id) => document.getElementById(id);

const loadBtn = $("loadBtn");
const clearBtn = $("clearBtn");
const statusEl = $("status");
const card = $("card");
const avatar = $("avatar");
const cell = $("cell");
const city = $("city");
const email = $("email");
const coords = $("coords");

loadBtn.addEventListener("click", async () => {
  setStatus("Завантаження…");

  try {
    // 1) Отримаємо 1 користувача
    const resp = await fetch("https://randomuser.me/api/");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    // 2) Розпарсимо JSON (Promise -> Object)
    const data = await resp.json();

    // 3) Дістанемо перший елемент
    const user = (data && data.results && data.results[0]) || null;
    if (!user) throw new Error("Відповідь без даних");

    // 4) Підготуємо потрібні поля згідно варіанту
    const pictureUrl = user.picture?.large || user.picture?.medium || "";
    const cellVal = user.cell || "";
    const cityVal = user.location?.city || "";
    const emailVal = user.email || "";
    const lat = user.location?.coordinates?.latitude ?? "";
    const lon = user.location?.coordinates?.longitude ?? "";

    // 5) Виведемо в розмітку
    if (pictureUrl) {
      avatar.src = pictureUrl;
    } else {
      avatar.removeAttribute("src");
    }

    cell.textContent = cellVal || "—";
    city.textContent = cityVal || "—";

    if (emailVal) {
      email.textContent = emailVal;
      email.href = `mailto:${emailVal}`;
    } else {
      email.textContent = "—";
      email.removeAttribute("href");
    }

    const coordText = lat && lon ? `${lat}, ${lon}` : "—";
    coords.textContent = coordText;

    card.hidden = false;
    setStatus("Готово.");
  } catch (err) {
    console.error(err);
    setStatus("Помилка завантаження. Спробуй ще раз.", true);
  } 
});

clearBtn.addEventListener("click", () => {
  card.hidden = true;
  avatar.removeAttribute("src");
  cell.textContent = "";
  city.textContent = "";
  email.textContent = "";
  email.removeAttribute("href");
  coords.textContent = "";
  setStatus("");
});

function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
}


