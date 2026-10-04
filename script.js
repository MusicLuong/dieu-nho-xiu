const REQUIRED_NAME = "Trương Hạ Kiều Vi";
const $ = (id) => document.getElementById(id);
const gateScreen = $("gateScreen");
const letterScreen = $("letterScreen");
const envelopeButton = $("envelopeButton");
const nameDialog = $("nameDialog");
const recipientName = $("recipientName");
const nameError = $("nameError");
const motion = matchMedia("(prefers-reduced-motion: reduce)");
let openingTimer;
let frameRequest;
let chibiPlayed = false;
const frames = ["boy-walk-1", "boy-walk-2", "boy-shy", "boy-hidden-flowers", "boy-smile", "boy-give-flowers"];
const frameImages = frames.map((name) => {
  const img = new Image();
  img.src = `assets/${name}.png`;
  return img;
});
let shownFrame = "";
function setFrame(name) {
  if (shownFrame === name) return;
  $("boyFrame").src = `assets/${name}.png`;
  $("chibiBoy").dataset.pose = name;
  shownFrame = name;
}
function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ").normalize("NFC");
}
function clearNameError() {
  nameError.textContent = "";
  recipientName.removeAttribute("aria-invalid");
}
envelopeButton.addEventListener("click", () => {
  clearNameError();
  nameDialog.showModal();
  recipientName.focus();
});
function closeNameDialog() {
  nameDialog.close();
  envelopeButton.focus({ preventScroll: true });
}
$("closeDialogButton").addEventListener("click", closeNameDialog);
nameDialog.addEventListener("click", (event) => {
  const rect = nameDialog.getBoundingClientRect();
  if (event.target === nameDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeNameDialog();
});
recipientName.addEventListener("input", clearNameError);
$("nameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (normalizeName(recipientName.value) !== REQUIRED_NAME) {
    nameError.textContent = "Bạn không phải là người ấy";
    recipientName.setAttribute("aria-invalid", "true");
    recipientName.focus();
    recipientName.select();
    return;
  }
  clearNameError();
  nameDialog.close();
  envelopeButton.disabled = true;
  document.body.classList.add("is-unsealing");
  openingTimer = setTimeout(revealLetter, motion.matches ? 0 : 1300);
});
function revealLetter() {
  clearTimeout(openingTimer);
  document.body.classList.remove("is-unsealing");
  gateScreen.hidden = true;
  letterScreen.hidden = false;
  document.body.classList.add("is-opening");
  $("letterTitle").focus({ preventScroll: true });
  chibiObserver.observe($("chibiStage"));
}
$("backToEnvelope").addEventListener("click", () => {
  clearTimeout(openingTimer);
  cancelAnimationFrame(frameRequest);
  chibiObserver.disconnect();
  chibiPlayed = false;
  letterScreen.hidden = true;
  gateScreen.hidden = false;
  envelopeButton.disabled = false;
  document.body.classList.remove("is-opening", "is-unsealing");
  recipientName.value = "";
  resetChibi();
  window.scrollTo({ top: 0, behavior: "instant" });
  envelopeButton.focus({ preventScroll: true });
});
function resetChibi() {
  $("replayChibi").disabled = false;
  $("chibiBoy").style.transform = motion.matches ? "translateX(0)" : "translateX(-150%)";
  setFrame(motion.matches ? "boy-give-flowers" : "boy-walk-1");
  $("chibiStatus").textContent = "Một bó hoa, thay lời em muốn nói.";
}
function finishChibi() {
  cancelAnimationFrame(frameRequest);
  $("chibiBoy").style.transform = "translateX(0)";
  setFrame("boy-give-flowers");
  $("chibiStatus").textContent = "Gửi chị một bó hoa, cùng những điều em muốn bày tỏ.";
  $("replayChibi").disabled = false;
}
function playChibi() {
  cancelAnimationFrame(frameRequest);
  chibiPlayed = true;
  if (motion.matches) { finishChibi(); return; }
  $("replayChibi").disabled = true;
  const start = performance.now();
  const draw = (now) => {
    if (letterScreen.hidden) return;
    const elapsed = now - start;
    if (elapsed < 2800) {
      const progress = elapsed / 2800;
      $("chibiBoy").style.transform = `translateX(${-150 * (1 - progress)}%)`;
      setFrame(Math.floor(elapsed / 230) % 2 ? "boy-walk-2" : "boy-walk-1");
      $("chibiStatus").textContent = "Em tiến lại gần chị…";
    } else {
      $("chibiBoy").style.transform = "translateX(0)";
      if (elapsed < 4200) {
        setFrame("boy-shy"); $("chibiStatus").textContent = "Một chút ngập ngừng…";
      } else if (elapsed < 5700) {
        setFrame("boy-hidden-flowers"); $("chibiStatus").textContent = "Có một bó hoa giấu sau lưng.";
      } else if (elapsed < 7000) {
        setFrame("boy-smile"); $("chibiStatus").textContent = "Và một điều em muốn nói.";
      } else { finishChibi(); return; }
    }
    frameRequest = requestAnimationFrame(draw);
  };
  frameRequest = requestAnimationFrame(draw);
}
const chibiObserver = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting) && !chibiPlayed && !letterScreen.hidden) playChibi();
}, { threshold: 0.5 });
$("replayChibi").addEventListener("click", playChibi);
motion.addEventListener("change", () => {
  if (motion.matches) {
    if (document.body.classList.contains("is-unsealing")) revealLetter();
    finishChibi();
  }
});
resetChibi();

// Chọn ảnh chỉ để xem trước trên thiết bị; không gửi tệp đi đâu.
const previewURLs = new Map();
function bindUpload(inputId, imageId, buttonId, errorId, afterLoad) {
  const input = $(inputId);
  $(buttonId).addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const [file] = input.files;
    if (!file) return;
    const error = $(errorId);
    error.textContent = "";
    if (!file.type.startsWith("image/")) {
      error.textContent = "Vui lòng chọn một tệp hình ảnh.";
      input.value = "";
      return;
    }
    const candidate = new Image();
    const url = URL.createObjectURL(file);
    candidate.onload = () => {
      const previousURL = previewURLs.get(imageId);
      if (previousURL) URL.revokeObjectURL(previousURL);
      previewURLs.set(imageId, url);
      const image = $(imageId);
      image.src = url;
      image.alt = "Ảnh thư do người dùng chọn";
      image.hidden = false;
      afterLoad();
    };
    candidate.onerror = () => {
      URL.revokeObjectURL(url);
      error.textContent = "Không đọc được ảnh này. Hãy thử ảnh PNG hoặc JPEG.";
    };
    candidate.src = url;
  });
}
bindUpload("letterUpload", "letterImage", "chooseLetterImage", "letterUploadError", () => {
  $("letterImageCaption").textContent = "01 / 03 — Ảnh xem trước từ thiết bị";
  $("letterImage").closest("a").href = $("letterImage").src;
});
