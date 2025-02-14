const translations = {
    en: {
        title: "Welcome to Physique-Tech Club",
        aboutTitle: "About Us",
        aboutDescription: "We are Physique-Tech, a university club that combines a passion for physics and technology. Our mission is to promote scientific understanding and develop technical skills through educational activities, workshops, and innovative projects. Our goal is to create an interactive environment where students can exchange ideas, enhance their skills, and prepare for a future full of creativity and discoveries. Join us on our journey to explore the world of physics and technology!",
        eventsTitle: "Upcoming Events",
        eventsList: ["Physics Workshop - March 2025", "Technology Conference - April 2025"],
        registerTitle: "Register as a Member",
        button:"Registration",
        footer: "Contact us at: contact.physique.tech@gmail.com",
        carouselTitle:"News",
        Event1:"This is Event 1",
        Event2:"This is Event 2",
        Event3:"This is Event 3",
    },
    fr: {
        title: "Bienvenue au club Physique-Tech",
        aboutTitle: "À propos de nous",
        aboutDescription: "Nous sommes Physique-Tech, un club universitaire qui allie passion pour la physique et technologie. Nous visons à promouvoir la compréhension scientifique et le développement des compétences techniques à travers des activités éducatives, des ateliers et des projets innovants. Notre objectif est de créer un environnement interactif où les étudiants peuvent échanger des idées, développer leurs compétences et se préparer à un avenir rempli de créativité et de découvertes. Rejoignez-nous dans notre voyage à la découverte du monde de la physique et de la technologie !",
        eventsTitle: "Événements à venir",
        eventsList: ["Atelier de physique - Mars 2025", "Conférence de technologie - Avril 2025"],
        registerTitle: "Inscrivez-vous en tant que membre",
        button:"Inscription",
        footer: "Contactez-nous à: contact.physique.tech@gmail.com",
        carouselTitle:"Nouvelles",
        Event1:"Ceci est l'événement 1",
        Event2:"Ceci est l'événement 2",
        Event3:"Ceci est l'événement 3",
    },
    ar: {
        title: "مرحباً بكم في نادي فيزيك-تك",
        aboutTitle: "من نحن",
        aboutDescription: "نحن Physique-Tech، نادٍ جامعي يجمع بين شغف الفيزياء والتكنولوجيا. نسعى إلى تعزيز الفهم العلمي وتطوير المهارات التقنية من خلال أنشطة تعليمية، ورش عمل، ومشاريع مبتكرة. هدفنا هو خلق بيئة تفاعلية حيث يلتقي الطلاب لمشاركة الأفكار، تطوير الكفاءات، والاستعداد لمستقبل مليء بالإبداع والاكتشافات.انضم إلينا في رحلتنا لاستكشاف عالم الفيزياء والتكنولوجيا!",
        eventsTitle: "الفعاليات القادمة",
        eventsList: ["ورشة عمل فيزياء - مارس 2025", "مؤتمر التكنولوجيا - أبريل 2025"],
        registerTitle: "سجل كعضو",
        button:"تسجيل",       
        footer: "اتصل بنا على: contact.physique.tech@gmail.com",
        carouselTitle:"الأخبار",
        Event1:"هذا هو الحدث 1",
        Event2:"هذا هو الحدث 2",
        Event3:"هذا هو الحدث 3",
    }
};

function changeLanguage(language) {
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("about-title").innerText = translations[language].aboutTitle;
    document.getElementById("about-description").innerText = translations[language].aboutDescription;
    document.getElementById("events-title").innerText = translations[language].eventsTitle;
    
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = '';
    translations[language].eventsList.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;
        eventsList.appendChild(li);
    });

    document.getElementById("register-title").innerText = translations[language].registerTitle;
    document.getElementById("footer").innerText = translations[language].footer;
    document.getElementById("button").innerText = translations[language].button;
    document.getElementById("carousel-title").innerText = translations[language].carouselTitle;
    document.getElementById("Event1").innerText = translations[language].Event1;
    document.getElementById("Event2").innerText = translations[language].Event2;
    document.getElementById("Event3").innerText = translations[language].Event3;
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// عرض الصورة الأولى عند تحميل الصفحة
showSlide(currentIndex);

// تغيير الصورة كل 5 ثوانٍ
setInterval(nextSlide, 5000);
