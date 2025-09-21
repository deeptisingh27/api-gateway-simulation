let token = null;
let maxRequests = 5;
let requestsLeft = maxRequests;

function login() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
        token = "fake-jwt-token-" + btoa(username);
        document.getElementById("authStatus").innerText = "Authenticated ✅ Token: " + token;
    } 
    else {
        document.getElementById("authStatus").innerText = "Login failed ❌";
    }
}

function sendRequest() {
    if (!token) {
        alert("Please login first!");
        return;
    }
    if (requestsLeft > 0) {
        requestsLeft--;
        document.getElementById("rateStatus").innerText = `Requests left: ${requestsLeft}`;
        let percent = (requestsLeft / maxRequests) * 100;
        document.getElementById("progressBar").style.width = percent + "%";
    } 
    else {
        document.getElementById("rateStatus").innerText = "Rate limit exceeded ❌";
    }
}

function checkServices() {
    const services = ["service1", "service2", "service3"];
    const isDark = document.body.classList.contains("dark"); 
    services.forEach(id => {
        const el = document.getElementById(id);
        const healthy = Math.random() > 0.3;
        el.querySelector("span").innerText = healthy ? "Healthy ✅" : "Down ❌";

        if (isDark) {
            el.style.background = healthy ? "#064d00" : "#5c0000"; 
            el.style.color = "#fff";
        } 
        else {
            el.style.background = healthy ? "#d4edda" : "#f8d7da"; 
            el.style.color = "#333"; 
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
