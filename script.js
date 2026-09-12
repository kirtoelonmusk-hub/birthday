 // ========== کلاس اصلی ==========
class CherryEffects {
  constructor() {
    this.particles = [];
    this.floatingHearts = [];
    this.isDragging = false;
    this.init();
  }

  // مقداردهی اولیه
  init() {
    this.createParticles();
    this.createFloatingHearts();
    this.addRippleEffect();
    this.addParallaxEffect();
    this.addTypewriterEffect();
    this.addScrollReveal();
    this.addConfettiEffect();
    this.addSoundEffect();
    console.log('🍒 CherryEffects loaded!');
  }

  // ========== ذرات پس زمینه ==========
  createParticles() {
    setInterval(() => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 8 + 3;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 14000);
    }, 200);
  }

  // ========== قلب های شناور ==========
  createFloatingHearts() {
    const icons = ['❤️', '💖', '🌸', '🍒', '💗', '✨', '🎂', '🌹', '💝'];
    
    setInterval(() => {
      const heart = document.createElement('div');
      heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
      heart.style.position = 'fixed';
      heart.style.bottom = '-60px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '2';
      heart.style.fontSize = (Math.random() * 28 + 16) + 'px';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animation = 'floatUp 7s linear forwards';
      heart.style.filter = 'drop-shadow(0 0 5px #ff2a4a)';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 300);

    // استایل انیمیشن
    if (!document.querySelector('#floatStyle')) {
      const style = document.createElement('style');
      style.id = 'floatStyle';
      style.textContent = `
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ========== افکت ریپل روی کلیک ==========
  addRippleEffect() {
    document.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = '9999';
      ripple.style.left = (e.clientX - 10) + 'px';
      ripple.style.top = (e.clientY - 10) + 'px';
      ripple.style.animation = 'rippleEffect 0.6s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // ========== افکت پارالاکس ==========
  addParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.photo-card, .cake-card, .cherry-card');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      cards.forEach(card => {
        card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${y * 0.05}deg) translateY(-5px)`;
      });
    });
  }

  // ========== افکت تایپ رایتر ==========
  addTypewriterEffect() {
    const elements = document.querySelectorAll('.typewriter');
    elements.forEach(el => {
      const text = el.getAttribute('data-text') || el.innerText;
      el.innerText = '';
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          el.innerText += text[i];
          i++;
        } else {
          clearInterval(typing);
        }
      }, 80);
    });
  }

  // ========== اسکرول ریویل (پیدا شدن تدریجی) ==========
  addScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }

  // ========== کانفتی (جشن) ==========
  addConfettiEffect() {
    window.createConfetti = () => {
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.style.position = 'fixed';
          confetti.style.width = (Math.random() * 10 + 5) + 'px';
          confetti.style.height = (Math.random() * 15 + 10) + 'px';
          confetti.style.background = `linear-gradient(135deg, #ff${Math.floor(Math.random() * 100) + 30}${Math.floor(Math.random() * 100) + 30}, #ff${Math.floor(Math.random() * 100) + 30}${Math.floor(Math.random() * 100) + 30})`;
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.top = '-20px';
          confetti.style.pointerEvents = 'none';
          confetti.style.zIndex = '1000';
          confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s linear forwards`;
          document.body.appendChild(confetti);
          setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
      }
    };

    // استایل کانفتی
    if (!document.querySelector('#confettiStyle')) {
      const style = document.createElement('style');
      style.id = 'confettiStyle';
      style.textContent = `
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ========== افکت صوتی (اختیاری) ==========
  addSoundEffect() {
    // فقط برای دکمه ها
    const buttons = document.querySelectorAll('.cherry-btn, .super-btn, .gift-3d');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // افکت بصری به جای صدا (برای گوشی بهتره)
        btn.style.transform = 'scale(0.96)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 150);
      });
    });
  }

  // ========== توابع قابل استفاده در صفحات ==========
  static showHeart(x, y) {
    const heart = document.createElement('div');
    const icons = ['❤️', '💖', '🌸', '🍒', '💗', '✨', '🎉'];
    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    heart.style.position = 'fixed';
    heart.style.left = (x - 15) + 'px';
    heart.style.top = (y - 15) + 'px';
    heart.style.fontSize = (Math.random() * 20 + 24) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'heartPop 0.8s ease-out forwards';
    heart.style.filter = 'drop-shadow(0 0 10px #ff2a4a)';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }

  static startFireworks() {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.style.position = 'fixed';
        firework.style.width = '8px';
        firework.style.height = '8px';
        firework.style.borderRadius = '50%';
        firework.style.backgroundColor = ['#ff2a4a', '#ff5a7a', '#ffcc33', '#ff33cc'][Math.floor(Math.random() * 4)];
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 80 + '%';
        firework.style.pointerEvents = 'none';
        firework.style.zIndex = '1000';
        firework.style.animation = 'fireworkExplode 1s ease-out forwards';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
      }, i * 50);
    }
  }
}

// ========== استایل های اضافی برای قلب و آتش بازی ==========
if (!document.querySelector('#cherryEffectsStyle')) {
  const style = document.createElement('style');
  style.id = 'cherryEffectsStyle';
  style.textContent = `
    @keyframes heartPop {
      0% { transform: scale(0) rotate(0deg); opacity: 1; }
      100% { transform: scale(2) rotate(180deg); opacity: 0; }
    }
    @keyframes fireworkExplode {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(3); opacity: 0; }
    }
    @keyframes rippleEffect {
      0% { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// ========== راه اندازی ==========
document.addEventListener('DOMContentLoaded', () => {
  window.cherryEffects = new CherryEffects();
  
  // اضافه کردن افکت قلب به کل صفحه
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cherry-btn') && !e.target.closest('.super-btn') && !e.target.closest('.theme-toggle')) {
      CherryEffects.showHeart(e.clientX, e.clientY);
    }
  });
  
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    if (!e.target.closest('.cherry-btn') && !e.target.closest('.super-btn') && !e.target.closest('.theme-toggle')) {
      CherryEffects.showHeart(touch.clientX, touch.clientY);
    }
  });
});

// ========== توابع گلوبال برای استفاده در صفحات ==========
window.showCherryHeart = CherryEffects.showHeart;
window.startCherryFireworks = CherryEffects.startFireworks;