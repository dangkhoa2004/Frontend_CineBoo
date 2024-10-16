export default function seat() {
    let seats = document.querySelector(".all-seats");
    let totalSeats = 60; // Assuming 60 seats, adjust if necessary

    for (let i = 0; i < totalSeats; i++) {
        let randint = Math.floor(Math.random() * 2);
        let booked = randint === 1 ? "booked" : "";
        seats.insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" name="tickets" id="s${i + 1}" />
             <label for="s${i + 1}" class="seat ${booked}"></label>`
        );
    }

    let tickets = seats.querySelectorAll("input");
    tickets.forEach((ticket) => {
        ticket.addEventListener("change", () => {
            let amount = Number(document.querySelector(".amount").innerHTML);
            let count = Number(document.querySelector(".count").innerHTML);

            if (ticket.checked) {
                count += 1;
                amount += 200;
            } else {
                count -= 1;
                amount -= 200;
            }

            document.querySelector(".amount").innerHTML = amount;
            document.querySelector(".count").innerHTML = count;
        });
    });
}
