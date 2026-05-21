document.addEventListener("DOMContentLoaded", function() {

    if (!document.getElementById("viestit")) return;

    const forum = [
        { sender: "mr customer", date: "2010-05-10", title: "looking for someone", body: "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?" },
        { sender: "Moe", date: "2010-05-10", title: "re: looking for someone", body: "Let's ask around. What's his name?" },
        { sender: "mr customer", date: "2010-05-10", title: "re: looking for someone", body: "Yeah, his name is Seymore Butz." },
        { sender: "Moe", date: "2010-05-10", title: "re: looking for someone", body: "Is there a Butz here? Everybody! I wanna Seymore Butz!" },
        { sender: "Barney", date: "2010-05-10", title: "re: looking for someone", body: "LOL" },
        { sender: "Moe", date: "2010-05-10", title: "re: looking for someone", body: "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!" },
        { sender: "mr customer", date: "2010-05-10", title: "re: looking for someone", body: "😂😂😂😂😂😂😂😂😂😂😂" }
    ];

    for (let i = 0; i < forum.length; i++) {
        const num = i + 1;
        const post = forum[i];
        document.getElementById("paivamaara" + num).innerHTML = `
            <span class="forum-date">📅 ${post.date}</span>
            <span class="forum-sender">👤 ${post.sender}</span>
        `;
        document.getElementById("sisaltoforum" + num).innerHTML = `
            <h3 class="forum-title">${post.title}</h3>
            <p class="forum-body">${post.body}</p>
        `;
    }

    const modal = document.getElementById("modal");

    document.getElementById("avaanappi").onclick = function() {
        modal.style.display = "block";
    };

    document.getElementById("suljenappi").onclick = function() {
        modal.style.display = "none";
    };

    document.getElementById("lahetanappi").onclick = function() {
        const nimi = document.getElementById("input-nimi").value;
        const otsikko = document.getElementById("input-otsikko").value;
        const viesti = document.getElementById("input-viesti").value;

        if (!nimi || !otsikko || !viesti) {
            alert("Täytä kaikki kentät!");
            return;
        }

        const today = new Date().toISOString().split("T")[0];
        const article = document.getElementById("viestit");

        forum.push({ sender: nimi, date: today, title: otsikko, body: viesti });

        const dateDiv = document.createElement("div");
        dateDiv.className = "paivamaara";
        dateDiv.innerHTML = `<span class="forum-date">📅 ${today}</span><span class="forum-sender">👤 ${nimi}</span>`;

        const contentDiv = document.createElement("div");
        contentDiv.className = "sisaltoforum";
        contentDiv.innerHTML = `<h3 class="forum-title">${otsikko}</h3><p class="forum-body">${viesti}</p>`;

        article.appendChild(dateDiv);
        article.appendChild(contentDiv);

        document.getElementById("input-nimi").value = "";
        document.getElementById("input-otsikko").value = "";
        document.getElementById("input-viesti").value = "";
        modal.style.display = "none";
    };

});