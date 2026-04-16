// ================= CONFIGURATION =================
const CONFIG = {
  waNumber: "6281927625651", // Ganti dengan nomor WhatsApp Anda
  socialMedia: {
    instagram: "https://instagram.com/username_anda",
    tiktok: "https://tiktok.com/@username_anda",
    facebook: "https://facebook.com/username_anda"
  },
  fallbackImage: "https://via.placeholder.com/400x300?text=Villa+Tawangmangu"
};

// ================= DATA VILLA =================
const villas = [
  {
    id: 1,
    name: "Villa Gunung View",
    mainImage: "https://raw.githubusercontent.com/villatawangmangu/v2/main/images/1-1.jpg",
    images: [
      "https://raw.githubusercontent.com/villatawangmangu/v2/main/images/1-2.jpg",
      "https://raw.githubusercontent.com/villatawangmangu/v2/main/images/1-3.jpg",
      "https://raw.githubusercontent.com/villatawangmangu/v2/main/images/1-4.jpg",
      "https://raw.githubusercontent.com/villatawangmangu/v2/main/images/1-5.jpg"
    ],
    weekdayPrice: "Rp 900.000",
    weekendPrice: "Rp 1.500.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "medium",
    bedrooms: 3,
    bathrooms: 2,
    capacity: 8,
    shortDesc: "Villa dengan pemandangan gunung yang menakjubkan, cocok untuk keluarga",
    fullDesc: "Villa Gunung View menawarkan pengalaman menginap yang tak terlupakan dengan pemandangan langsung ke Gunung Lawu.",
    facilities: ["WiFi", "Kolam Renang", "Dapur", "AC", "Parkir Luas", "BBQ Area", "TV Kabel", "Air Panas"],
    tags: ["Mountain View", "Family Friendly", "Pool"]
  },
  {
    id: 2,
    name: "Villa Asri Tawangmangu",
    mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa2-main.jpg",
    images: [
      "https://raw.githubusercontent.com/username/repo/main/images/villa2-1.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa2-2.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa2-3.jpg"
    ],
    weekdayPrice: "Rp 1.200.000",
    weekendPrice: "Rp 2.000.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "premium",
    bedrooms: 4,
    bathrooms: 3,
    capacity: 10,
    shortDesc: "Villa luas dengan taman asri dan udara sejuk pegunungan",
    fullDesc: "Villa Asri menawarkan ketenangan di tengah alam dengan taman yang luas dan asri.",
    facilities: ["WiFi", "Kolam Renang Pribadi", "Dapur Lengkap", "AC", "Karaoke", "Taman Luas", "Gazebo", "Air Panas"],
    tags: ["Private Pool", "Large Group", "Garden"]
  },
  {
    id: 3,
    name: "Villa Minimalis Modern",
    mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa3-main.jpg",
    images: [
      "https://raw.githubusercontent.com/username/repo/main/images/villa3-1.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa3-2.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa3-3.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa3-4.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa3-5.jpg"
    ],
    weekdayPrice: "Rp 750.000",
    weekendPrice: "Rp 1.200.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "budget",
    bedrooms: 2,
    bathrooms: 2,
    capacity: 6,
    shortDesc: "Desain minimalis modern dengan fasilitas lengkap dan nyaman",
    fullDesc: "Villa dengan desain minimalis modern yang instagramable.",
    facilities: ["WiFi", "AC", "Dapur", "TV Smart", "Parkir", "Air Panas", "Rooftop", "Coffee Maker"],
    tags: ["Instagramable", "Couple", "Modern"]
  },
  {
    id: 4,
    name: "Villa Keluarga Bahagia",
    mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa4-main.jpg",
    images: [
      "https://raw.githubusercontent.com/username/repo/main/images/villa4-1.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa4-2.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa4-3.jpg"
    ],
    weekdayPrice: "Rp 1.000.000",
    weekendPrice: "Rp 1.800.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "medium",
    bedrooms: 3,
    bathrooms: 2,
    capacity: 8,
    shortDesc: "Villa ramah keluarga dengan area bermain anak",
    fullDesc: "Villa Keluarga Bahagia didesain khusus untuk kenyamanan keluarga dengan anak-anak.",
    facilities: ["WiFi", "Kolam Renang", "Playground", "Dapur", "AC", "TV", "BBQ Area", "Air Panas", "Baby Cot"],
    tags: ["Kids Friendly", "Playground", "Safe Pool"]
  },
  {
    id: 5,
    name: "Villa Luxury View",
    mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa5-main.jpg",
    images: [
      "https://raw.githubusercontent.com/username/repo/main/images/villa5-1.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa5-2.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa5-3.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa5-4.jpg"
    ],
    weekdayPrice: "Rp 2.000.000",
    weekendPrice: "Rp 3.000.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "premium",
    bedrooms: 5,
    bathrooms: 4,
    capacity: 12,
    shortDesc: "Villa luxury dengan fasilitas premium dan pemandangan spektakuler",
    fullDesc: "Villa Luxury View menawarkan pengalaman menginap premium dengan fasilitas terbaik.",
    facilities: ["WiFi", "Infinity Pool", "Home Theater", "Dapur Gourmet", "AC Central", "Jacuzzi", "Gym", "Butler Service", "Air Panas"],
    tags: ["Luxury", "Infinity Pool", "Premium"]
  },
  {
    id: 6,
    name: "Villa Cottage Asri",
    mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa6-main.jpg",
    images: [
      "https://raw.githubusercontent.com/username/repo/main/images/villa6-1.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa6-2.jpg",
      "https://raw.githubusercontent.com/username/repo/main/images/villa6-3.jpg"
    ],
    weekdayPrice: "Rp 600.000",
    weekendPrice: "Rp 1.000.000",
    priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
    tier: "budget",
    bedrooms: 2,
    bathrooms: 1,
    capacity: 4,
    shortDesc: "Cottage cozy dengan suasana pedesaan yang tenang",
    fullDesc: "Villa Cottage Asri menawarkan pengalaman menginap yang cozy dengan suasana pedesaan.",
    facilities: ["WiFi", "AC", "Dapur Sederhana", "Taman", "Parkir", "Air Panas", "Pemandangan Sawah"],
    tags: ["Cozy", "Honeymoon", "Nature"]
  }
];

// ================= HELPER: Format Tanggal Indonesia =================
function formatDateIndo(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

// ================= HELPER: Cek Weekend/Weekday =================
function isWeekend(dateString) {
  if (!dateString) return false;
  const date = new Date(dateString);
  const day = date.getDay(); // 0 = Minggu, 6 = Sabtu
  return day === 0 || day === 6;
}

// ================= HELPER: Hitung Harga Berdasarkan Tanggal =================
function calculatePriceDisplay(villa, checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return {
      show: true,
      weekday: villa.weekdayPrice,
      weekend: villa.weekendPrice,
      note: villa.priceNote
    };
  }
  
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  
  if (nights <= 0) return { show: false };
  
  let weekdayCount = 0, weekendCount = 0;
  let current = new Date(start);
  
  for (let i = 0; i < nights; i++) {
    if (isWeekend(current.toISOString().split('T')[0])) {
      weekendCount++;
    } else {
      weekdayCount++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return {
    show: true,
    total: `~ ${nights} malam (${weekdayCount} weekday + ${weekendCount} weekend)`,
    note: `Harga estimasi: ${weekdayCount}x ${villa.weekdayPrice} + ${weekendCount}x ${villa.weekendPrice}`
  };
}

// ================= RENDER VILLA GRID =================
function renderVillas(filter = 'semua') {
  const villaGrid = document.getElementById('villaGrid');
  const filtered = filter === 'semua' ? villas : villas.filter(v => v.tier === filter);
  
  villaGrid.innerHTML = filtered.map(villa => `
    <div class="villa-card" onclick="openModal(${villa.id})">
      <img src="${villa.mainImage}" alt="${villa.name}" class="villa-image" onerror="this.src='${CONFIG.fallbackImage}'">
      <span class="villa-badge">${villa.tier === 'premium' ? '✨ Premium' : villa.tier === 'medium' ? '🔥 Populer' : '💰 Hemat'}</span>
      <div class="villa-info">
        <div class="villa-name">${villa.name}</div>
        <div class="villa-details">
          <span><i class="fas fa-bed"></i> ${villa.bedrooms}</span>
          <span><i class="fas fa-bath"></i> ${villa.bathrooms}</span>
          <span><i class="fas fa-users"></i> ${villa.capacity}</span>
        </div>
        <div class="villa-price">
          <div class="price-container">
            <span class="price-weekday"><span class="price-label">Weekday:</span> ${villa.weekdayPrice}</span>
            <span class="price-weekend"><span class="price-label">Weekend:</span> ${villa.weekendPrice}</span>
          </div>
          <small class="price-note">${villa.priceNote}</small>
        </div>
        <div class="villa-tags">${villa.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        <p class="villa-desc">${villa.shortDesc}</p>
        <div class="villa-footer">
          <button class="btn-sm" onclick="event.stopPropagation(); openModal(${villa.id})">Lihat Detail</button>
        </div>
      </div>
    </div>
  `).join('');
  
  document.getElementById('villaCount').textContent = filtered.length;
}

// ================= FILTER FUNCTION =================
function filterVillas(tier, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderVillas(tier);
}

// ================= GENERATE SIMPLE WA MESSAGE =================
function generateWAMessage(villaName, checkIn, checkOut) {
  const checkInFormatted = formatDateIndo(checkIn);
  
  // Pesan sederhana sesuai request
  return encodeURIComponent(
    `Hay min mau tanya untuk tanggal ${checkInFormatted} apakah ${villaName} masih tersedia.`
  );
}

// ================= GENERATE SOCIAL ICONS =================
function generateSocialIcons() {
  return `
    <div class="social-container">
      <p>Follow kami untuk update promo:</p>
      <div class="social-icons">
        <a href="https://wa.me/${CONFIG.waNumber}" class="social-icon wa" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="${CONFIG.socialMedia.instagram}" class="social-icon ig" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${CONFIG.socialMedia.tiktok}" class="social-icon tt" target="_blank" rel="noopener noreferrer" title="TikTok"><i class="fab fa-tiktok"></i></a>
        <a href="${CONFIG.socialMedia.facebook}" class="social-icon fb" target="_blank" rel="noopener noreferrer" title="Facebook"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
  `;
}

// ================= OPEN MODAL =================
function openModal(villaId) {
  const villa = villas.find(v => v.id === villaId);
  if (!villa) return;
  
  const modal = document.getElementById('villaModal');
  const modalBody = document.getElementById('modalBody');

  // Generate default date: tomorrow for check-in, +2 nights for check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkOutDefault = new Date(tomorrow);
  checkOutDefault.setDate(checkOutDefault.getDate() + 2);
  
  const defaultCheckIn = tomorrow.toISOString().split('T')[0];
  const defaultCheckOut = checkOutDefault.toISOString().split('T')[0];

  modalBody.innerHTML = `
    <div class="modal-images">
      ${villa.images.map(img => `<img src="${img}" alt="${villa.name}" onclick="viewImage('${img}')" onerror="this.src='${CONFIG.fallbackImage}'">`).join('')}
    </div>
    <div class="modal-info">
      <h2>${villa.name}</h2>
      <div class="villa-details">
        <span><i class="fas fa-bed"></i> ${villa.bedrooms} Kamar Tidur</span>
        <span><i class="fas fa-bath"></i> ${villa.bathrooms} Kamar Mandi</span>
        <span><i class="fas fa-users"></i> ${villa.capacity} Orang</span>
      </div>
      
      <!-- Date Picker Section -->
      <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin: 20px 0;">
        <label style="display: block; font-size: 0.9rem; margin-bottom: 8px; color: var(--text-muted);">
          <i class="fas fa-calendar"></i> Pilih Tanggal Menginap
        </label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <input type="date" id="modalCheckIn" value="${defaultCheckIn}" style="background: rgba(255,255,255,0.1); border: 0.5px solid rgba(255,255,255,0.2); color: var(--text); padding: 10px; border-radius: 6px; font-size: 0.9rem;">
          <input type="date" id="modalCheckOut" value="${defaultCheckOut}" style="background: rgba(255,255,255,0.1); border: 0.5px solid rgba(255,255,255,0.2); color: var(--text); padding: 10px; border-radius: 6px; font-size: 0.9rem;">
        </div>
        <small id="priceEstimate" style="display: block; margin-top: 10px; color: var(--gold); font-size: 0.85rem;"></small>
      </div>
      
      <!-- Price Display (UI Only) -->
      <div class="price-container">
        <span class="price-weekday"><span class="price-label">📅 Weekday:</span> ${villa.weekdayPrice}<small>/malam</small></span>
        <span class="price-weekend"><span class="price-label">🎉 Weekend:</span> ${villa.weekendPrice}<small>/malam</small></span>
      </div>
      <small class="price-note">${villa.priceNote}</small>
      
      <p>${villa.fullDesc}</p>
      
      <div class="facilities">
        <h3><i class="fas fa-star"></i> Fasilitas</h3>
        <div class="facility-list">
          ${villa.facilities.map(fac => `<span class="facility-item">${fac}</span>`).join('')}
        </div>
      </div>
      
      <div class="booking-section">
        <button class="book-btn" id="whatsappBtn" onclick="sendToWhatsApp('${villa.name}')">
          <i class="fab fa-whatsapp"></i> Tanya Ketersediaan via WhatsApp
        </button>
        ${generateSocialIcons()}
      </div>
    </div>
  `;
  
  // Update price estimate on date change
  const checkInInput = document.getElementById('modalCheckIn');
  const checkOutInput = document.getElementById('modalCheckOut');
  const priceEstimate = document.getElementById('priceEstimate');
  
  function updatePriceEstimate() {
    const result = calculatePriceDisplay(villa, checkInInput.value, checkOutInput.value);
    if (result.show) {
      priceEstimate.innerHTML = result.total ? 
        `<i class="fas fa-info-circle"></i> ${result.total}<br>${result.note}` : 
        `<i class="fas fa-info-circle"></i> Weekday: ${villa.weekdayPrice} | Weekend: ${villa.weekendPrice}`;
    } else {
      priceEstimate.textContent = '';
    }
  }
  
  checkInInput.addEventListener('change', updatePriceEstimate);
  checkOutInput.addEventListener('change', updatePriceEstimate);
  updatePriceEstimate(); // Initial call
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// ================= SEND TO WHATSAPP =================
function sendToWhatsApp(villaName) {
  const checkIn = document.getElementById('modalCheckIn')?.value;
  const message = generateWAMessage(villaName, checkIn, null);
  window.open(`https://wa.me/${CONFIG.waNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
}

// ================= CLOSE MODAL =================
function closeModal() {
  const modal = document.getElementById('villaModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ================= VIEW IMAGE =================
function viewImage(src) {
  window.open(src, '_blank', 'noopener,noreferrer');
}

// ================= QUICK BOOKING FROM CTA =================
function quickBooking() {
  const name = document.getElementById('guestName')?.value || 'Tamu';
  const checkIn = document.getElementById('checkIn')?.value;
  const checkInFormatted = formatDateIndo(checkIn);
  
  const message = encodeURIComponent(
    `Hay min mau tanya untuk tanggal ${checkInFormatted} apakah ada villa yang tersedia?`
  );
  
  window.open(`https://wa.me/${CONFIG.waNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
}

// ================= EVENT LISTENERS =================
window.onclick = function(event) {
  const modal = document.getElementById('villaModal');
  if (event.target == modal) closeModal();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') closeModal();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ================= INITIALIZE =================
document.addEventListener('DOMContentLoaded', () => {
  renderVillas();
  console.log('✅ Website Sewa Villa Tawangmangu siap! 🏡');
});
