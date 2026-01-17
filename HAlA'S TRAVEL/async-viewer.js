const loadBtn = document.getElementById("loadUsersBtn");
const usersList = document.getElementById("usersList");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

loadBtn.addEventListener("click", fetchUsers);

const mockUsers = [
    { name: "Sara Ahmed", email: "sara.ahmed@example.com", city: "Amman" },
    { name: "Omar Khaled", email: "omar.khaled@example.com", city: "Cairo" },
    { name: "Lina Mansour", email: "lina.mansour@example.com", city: "Dubai" },
    { name: "Tariq Saeed", email: "tariq.saeed@example.com", city: "Istanbul" },
    { name: "Nour Al-Din", email: "nour.aldin@example.com", city: "Beirut" },
];

async function fetchUsers() {
    usersList.innerHTML = "";
    errorMessage.textContent = "";
    loadingMessage.textContent = "Loading users...";
    loadBtn.disabled = true;

    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const users = mockUsers;

        loadingMessage.textContent = "";

        if (users.length === 0) {
            errorMessage.textContent = "No users found.";
            errorMessage.style.color = "orange";
        } else {
            users.forEach((user) => {
                const li = document.createElement("li");
                li.innerHTML = `
          <strong>${user.name}</strong><br/>
          Email: <a href="mailto:${user.email}">${user.email}</a><br/>
          City: ${user.city}
        `;
                usersList.appendChild(li);
            });
        }
    } catch (error) {
        loadingMessage.textContent = "";
        errorMessage.textContent = "Error loading data. Please try again.";
        errorMessage.style.color = "red";
    } finally {
        loadBtn.disabled = false;
    }
}
