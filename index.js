const container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "100vh";
container.style.position = "fixed";

const box = document.createElement("div");
container.appendChild(box);
box.style.position = "absolute";
box.style.backgroundColor = "black";

const forScroll = document.createElement("div");
forScroll.style.height = "1000vh";

const getScrollPercent = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  return percent;
};

const onScroll = () => {
  const percent = getScrollPercent();
  box.style.height = `${percent}vh`;
  box.style.width = `${percent}vw`;
  box.style.left = `${50 - percent / 2}vw`;
  box.style.top = `${percent / 2}vh`;
  if (percent >= 50) {
    box.style.top = `${50 - percent / 2}vh`;
  }
};

document.body.style.margin = "0";
document.body.appendChild(container);
document.body.appendChild(forScroll);
window.addEventListener("scroll", onScroll);
