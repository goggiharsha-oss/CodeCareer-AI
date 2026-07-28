const clickSound = new Audio("/sounds/click.mp3.mp3");

clickSound.preload = "auto";
clickSound.volume = 0.35;

export function playClick() {
  clickSound.currentTime = 0;

  clickSound.play().catch(() => {
    // Ignore autoplay errors
  });
}