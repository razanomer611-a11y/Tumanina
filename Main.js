/* =========================================
   1. آيات اليوم
========================================= */

const verses = [
    {
        text: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ",
        source: "سورة الذاريات - 22"
    },

    {
        text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        source: "سورة الشرح - 5"
    },

    {
        text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        source: "سورة الرعد - 28"
    },

    {
        text: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
        source: "سورة الزمر - 53"
    }
];

let currentVerse = 0;


function changeVerse() {

    currentVerse++;

    if (currentVerse >= verses.length) {
        currentVerse = 0;
    }

    document.getElementById("verseText").innerText =
        verses[currentVerse].text;

    document.getElementById("verseSource").innerText =
        verses[currentVerse].source;
}



/* =========================================
   2. كيف حال قلبك؟
========================================= */

function showFeeling(feeling) {

    let message = "";

    if (feeling === "قلق") {

        message =
            "خدي نفساً عميقاً 🤍<br>" +
            "اطمئني، ما عند الله لا يضيع.<br>" +
            "رددي: حسبي الله ونعم الوكيل.";

    }

    else if (feeling === "حزن") {

        message =
            "ربنا يهون عليكِ 🤍<br>" +
            "تذكري أن بعد العسر يسراً.<br>" +
            "خدي وقتك واهدئي.";

    }

    else if (feeling === "تعب") {

        message =
            "خدي لحظة راحة 🌿<br>" +
            "أغلقي عينيك وخدي نفساً عميقاً.<br>" +
            "لا بأس أن ترتاحي.";

    }

    else if (feeling === "سعادة") {

        message =
            "الحمد لله على هذه اللحظة الجميلة 🤍<br>" +
            "احمدي الله على نعمه.";

    }


    document.getElementById("feelingMessage").innerHTML =
        message;
}



/* =========================================
   3. عداد التسبيح
========================================= */

let count = 0;


function increaseCounter() {

    count++;

    document.getElementById("counter").innerText =
        count;

}



/* =========================================
   4. رسالة اليوم
========================================= */

function showStory() {

    let messages = [

        "ربما تأخر الشيء الذي تتمنينه، لكنه لم يتأخر عن علم الله 🤍",

        "اطمئني، فالله يعلم ما في قلبك حتى قبل أن تتكلمي.",

        "ليس عليكِ أن تعرفي كل شيء الآن، يكفي أن تثقي بالله 🌿",

        "كل صباح فرصة جديدة لبداية أكثر هدوءاً.",

        "ما دام الأمر بيد الله، فاطمئني 🤍"

    ];


    let randomNumber =
        Math.floor(Math.random() * messages.length);


    document.getElementById("storyMessage").innerText =
        messages[randomNumber];
}



/* =========================================
   5. تأثير بسيط عند الضغط على عداد التسبيح
========================================= */

function increaseCounter() {

    count++;

    let counter =
        document.getElementById("counter");

    counter.innerText = count;


    counter.style.transform = "scale(1.15)";


    setTimeout(function () {

        counter.style.transform = "scale(1)";

    }, 150);

}
