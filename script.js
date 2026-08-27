/* =====================================================
   BROTHER DATA
===================================================== */

const brothers = {

    ajay: {
        name: "Ajay",
        photo: "photos/ajay.jpeg",
        message: `Dear Brother ❤️

If I could choose my brothers again, I would still choose you.

You have added so many beautiful memories to my life, and I’ll always cherish our bond.

Keep smiling, keep dreaming, and keep being the amazing person you are.

No matter where life takes us, I will always be grateful to have you as my brother.

Happy Raksha Bandhan! 🎊❤️`
    },

    krishna: {
        name: "Krishna",
        photo: "photos/krishna.jpeg",
        message: `Dear Brother ❤️

A brother is someone who can annoy you one minute and make you smile the next.

Thank you for being a beautiful part of my life.

Wherever life takes us, I hope our bond always stays this special.

May you always be happy, successful and surrounded by people who love you.

Happy Raksha Bandhan! 🎀❤️`
    },

    ganesh: {
        name: "Ganesh",
        photo: "photos/ganesh.jpeg",
        message: `Dear Brother ❤️

Life becomes a little brighter and a lot more fun with a brother like you.

Thank you for all the laughter, memories, and little moments that make our bond so special.

May you always be happy and successful.

Wishing you a beautiful Raksha Bandhan filled with happiness and love! ❤️`
    },

    rishab: {
        name: "Rishab",
        photo: "photos/rishab.jpeg",
        message: `Dear Brother ❤️

This Rakhi is a little reminder that no matter where life takes us, you'll always have a special place in my heart.

Thank you for every memory, every laugh, and every moment we've shared.

Sending you lots of love and the warmest Raksha Bandhan wishes! 🎀❤️`
    },

    vinayak: {
        name: "Vinayak",
        photo: "photos/vinayak.jpeg",
        message: `Dear Brother 🪷

Rakhi is a beautiful occasion to celebrate the bond of family and togetherness.

Even though we may not talk often, I’m glad to have you as my brother.

Wishing you a wonderful Raksha Bandhan filled with happiness, peace, and success! 🌼❤️`
    },

    varun: {
        name: "Varun",
        photo: "photos/varun.jpeg",
        message: `Dear Brother 💙

This Rakhi, I just want to send you my best wishes and a little reminder that bonds are always worth celebrating.

May your life be filled with good opportunities, happy moments, and success in everything you do.

Have a wonderful Raksha Bandhan! 🎀❤️`
    },

    vinuth: {
        name: "Vinuth",
        photo: "photos/vinuth.jpeg",
        message: `Dear Brother ❤️

This Rakhi is a sweet reminder of the bond we share.

Though we may not always talk or spend much time together, you will always be a special part of my life.

Wishing you happiness, success, and lots of beautiful moments ahead.

Happy Raksha Bandhan! 🎀✨❤️`
    },

    prajwal: {
        name: "Prajwal",
        photo: "photos/prajwal.jpeg",
        message: `Dear Brother ❤️

Life becomes a little brighter and a lot more fun with a brother like you.

Thank you for all the laughter, memories, and little moments that make our bond so special.

May you always be happy and successful.

Happy Raksha Bandhan! ✨❤️`
    },

    lohith: {
        name: "Lohith",
        photo: "photos/lohith.jpeg",
        message: `Dear Brother ❤️

You have been a wonderful part of so many memories in my life.

From silly fights to unforgettable laughter, every moment with you is precious.

I may not say it often, but I’m really grateful to have you.

Happy Raksha Bandhan! 🪷❤️`
    },

    anshu: {
        name: "Anshu",
        photo: "photos/anshu.jpeg",
        message: `💖 Dear My Sweet Little Brother!

This Rakhi is a little reminder of how lucky I am to have such a loving and adorable brother like you. ❤️

You have such a pure heart, and the love and care you show me mean more than you know.

No matter how much you grow up, you’ll always be my little brother and my precious angel. 🥹✨

May you always stay happy, keep that beautiful smile on your face, and achieve everything you dream of.

I’ll always be there for you, cheering for you and loving you endlessly.

Happy Raksha Bandhan to my sweetest little brother! 🎀❤️`
    },

    nithin: {
        name: "Nithin",
        photo: "photos/nithin.jpeg",
        message: `Dear Brother ❤️

No matter how much we tease each other or argue over silly things, you will always hold a very special place in my heart.

Thank you for being someone I can always count on.

I’m truly lucky to have you as my brother.

Happy Raksha Bandhan! 🌸❤️`
    },

    harsha: {
        name: "Harsha",
        photo: "photos/harsha.jpeg",
        message: `Dear Brother ❤️

Some bonds are made by blood, but become special because of love, trust, and countless memories.

Ours is one of those beautiful bonds.

May you always have reasons to smile and dreams that come true.

Happy Raksha Bandhan! ❤️`
    },

    karthik: {
        name: "Karthik",
        photo: "photos/karthik.jpeg",
        message: `Dear Brother ❤️

Years may pass and life may change, but some relationships only become more precious with time.

Our brother-sister bond is one of them.

Thank you for being a part of my story.

Wishing you a lifetime of happiness and success.

Happy Raksha Bandhan! 🪷❤️`
    }

};


/* =====================================================
   PAGE 1
   NAME ENTRY
===================================================== */

function openMyRakhi() {

    const input = document.getElementById("nameInput");
    const error = document.getElementById("errorMessage");

    if (!input) {
        return;
    }

    const enteredName = input.value.trim().toLowerCase();

    if (enteredName === "") {

        if (error) {
            error.textContent =
                "🌸 Please enter your name first.";
        }

        return;
    }

    if (!brothers[enteredName]) {

        if (error) {
            error.textContent =
                "💗 Hmm... I couldn't find your name. Please check the spelling.";
        }

        return;
    }

    /* Save selected brother */

    localStorage.setItem(
        "selectedBrother",
        enteredName
    );

    /* Go to Page 2 */

    window.location.href = "wish.html";
}


/* =====================================================
   PAGE 2
   OPEN FINAL PAGE
===================================================== */

function openWishPage() {

    const selectedBrother =
        localStorage.getItem("selectedBrother");

    if (!selectedBrother || !brothers[selectedBrother]) {

        window.location.href = "index.html";

        return;
    }

    window.location.href = "final.html";
}


/* =====================================================
   ENTER KEY ON PAGE 1
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("nameInput");

        if (!input) {
            return;
        }

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    openMyRakhi();

                }

            }
        );

    }
);


/* =====================================================
   PAGE 2
   LOAD BROTHER NAME
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const brotherName =
            document.getElementById("brotherName");

        /*
           If brotherName does not exist,
           we are not on wish.html.
        */

        if (!brotherName) {
            return;
        }

        const selected =
            localStorage.getItem("selectedBrother");

        if (!selected || !brothers[selected]) {

            window.location.href =
                "index.html";

            return;
        }

        const brother =
            brothers[selected];

        /* Show brother name */

        brotherName.textContent =
            brother.name;

    }
);


/* =====================================================
   PAGE 3
   LOAD FINAL BROTHER DATA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const finalName =
            document.getElementById("finalBrotherName");

        /*
           If finalBrotherName does not exist,
           we are not on final.html.
        */

        if (!finalName) {
            return;
        }

        const selected =
            localStorage.getItem("selectedBrother");

        /* No selected brother */

        if (!selected || !brothers[selected]) {

            window.location.href =
                "index.html";

            return;
        }

        const brother =
            brothers[selected];


        /* =================================================
           BROTHER NAME
        ================================================= */

        finalName.textContent =
            "My Dear " + brother.name + " ❤️";


        /* =================================================
           BROTHER PHOTO
        ================================================= */

        const photo =
            document.getElementById("finalBrotherPhoto");

        if (photo) {

            photo.src =
                brother.photo;

            photo.alt =
                brother.name + "'s photo";

            photo.onerror = function () {

                console.error(
                    "Photo not found:",
                    brother.photo
                );

                /*
                   Show a friendly fallback
                   instead of a broken image.
                */

                photo.alt =
                    "Photo not available";

            };

        }


        /* =================================================
           MESSAGE NAME
        ================================================= */

        const messageName =
            document.getElementById("messageName");

        if (messageName) {

            messageName.textContent =
                brother.name;

        }


        /* =================================================
           COMPLETE MESSAGE
        ================================================= */

        const messageText =
            document.getElementById("messageText");

        if (messageText) {

            /*
               Convert line breaks into HTML <br>
               so the complete message appears
               properly.
            */

            messageText.innerHTML =
                brother.message.replace(/\n/g, "<br>");

        }

    }
);


/* =====================================================
   RAKHI EFFECTS
===================================================== */

let rakhiOpened = false;


function revealRakhi() {

    if (rakhiOpened) {
        return;
    }

    rakhiOpened = true;

    const wrapper =
        document.getElementById("rakhiWrapper");

    if (wrapper) {
        wrapper.classList.add("opened");
    }

    const touchText =
        document.getElementById("touchText");

    if (touchText) {

        touchText.innerHTML =
            "✨ Your special Rakhi is ready! ✨";

    }

    createConfetti();

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }

}


/* =====================================================
   MUSIC
===================================================== */

function toggleMusic(event) {

    if (event) {
        event.stopPropagation();
    }

    const song =
        document.getElementById("rakhiSong");

    const button =
        document.getElementById("musicButton");

    if (!song) {
        return;
    }

    if (song.paused) {

        song.play();

        if (button) {
            button.textContent =
                "⏸️ Pause Song";
        }

    } else {

        song.pause();

        if (button) {
            button.textContent =
                "🎵 Play Song";
        }

    }

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "heart";

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝",
        "🌸",
        "✨",
        "🪷"
    ];

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) + "px";

    heart.style.animationDuration =
        (
            4 +
            Math.random() * 4
        ) + "s";

    document.body.appendChild(
        heart
    );

    setTimeout(
        function () {

            heart.remove();

        },
        8000
    );

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#ffffff",
        "#ff9f1c",
        "#c77dff"
    ];

    for (
        let i = 0;
        i < 150;
        i++
    ) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(
            piece
        );

        setTimeout(
            function () {

                piece.remove();

            },
            6000
        );

    }

}