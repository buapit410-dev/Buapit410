// --- 1. ส่วนของข้อมูลโพสต์ (แกมาแก้/เพิ่ม ตรงนี้ได้ตลอด) ---
const activities = [
    {
        title: "เปิดตัวเว็บไซต์ห้อง 410",
        date: "10 เมษายน 2026",
        image: "post1.jpg", 
        description: "ยินดีต้อนรับเพื่อนๆ เข้าสู่หน้าเว็บหลักของห้องเรา!",
        tag: "News"
    }
];

// --- 2. ส่วนของคำสั่งให้มันไปโชว์บนหน้าเว็บ (ไม่ต้องแก้ตรงนี้) ---
function renderPosts() {
    const mainElement = document.querySelector('main'); // หาจุดวางในหน้าเว็บ
    
    // สร้างพื้นที่สำหรับโพสต์
    const postSection = document.createElement('section');
    postSection.innerHTML = `
        <h2 style="text-align: center; margin: 40px 0 20px; font-weight: 600; color: #FFB6C1;">กิจกรรมและอัปเดต</h2>
        <div id="postFeed" style="display: flex; flex-direction: column; gap: 20px; max-width: 600px; margin: 0 auto; padding-bottom: 50px;"></div>
    `;
    mainElement.appendChild(postSection);

    const postFeed = document.getElementById('postFeed');
    activities.forEach(post => {
        postFeed.innerHTML += `
            <div style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                <img src="${post.image}" onerror="this.src='https://via.placeholder.com/600x300/fcfcfc/ddd?text=410+Activity'" style="width: 100%; height: 250px; object-fit: cover;">
                <div style="padding: 20px; text-align: left;">
                    <span style="background: #FFB6C1; color: white; padding: 3px 12px; border-radius: 15px; font-size: 11px; display: inline-block; margin-bottom: 10px;">${post.tag}</span>
                    <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #2c3e50;">${post.title}</div>
                    <div style="font-size: 12px; color: #aaa; margin-bottom: 12px;">📅 ${post.date}</div>
                    <p style="font-size: 14px; color: #666; line-height: 1.6;">${post.description}</p>
                </div>
            </div>
        `;
    });
}

// สั่งให้ทำงานทันทีที่โหลดไฟล์นี้
renderPosts();

