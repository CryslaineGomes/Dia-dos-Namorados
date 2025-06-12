    let isPlaying = false;
    const audio = document.getElementById("romantic-music");

    function showVote() {
      document.getElementById("vote-msg").style.display = "block";
    }

    function toggleMusic() {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying = !isPlaying;
    }

    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "90vh";

      const size = Math.random() * 30 + 20;
      heart.style.fontSize = size + "px";

      const duration = Math.random() * 3 + 2;
      heart.style.animationDuration = duration + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }

    function autoStartEffects() {
      audio.play();
      isPlaying = true;
      for (let i = 0; i < 40; i++) {
        setTimeout(createHeart, i * 150);
      }
    }

    // Ativar automaticamente ao carregar
    window.onload = autoStartEffects;