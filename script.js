async function loadJapanResults() {
    try {
        const response = await fetch("race_results.json");
        const data = await response.json();
        const resultsTableBody = document.getElementById("resultsTableBody");
        resultsTableBody.innerHTML = ''; // Clear any existing data

        // Find the Japanese Grand Prix results
        const japanRace = data.races.find(race => race.round === 3);

        if (japanRace && japanRace.finishingOrder) {
            japanRace.finishingOrder.forEach((driver, index) => {
                const row = resultsTableBody.insertRow();
                const driverCell = row.insertCell();
                const positionCell = row.insertCell();

                positionCell.textContent = index + 1;
                driverCell.textContent = driver;
            });
        } else {
            const row = resultsTableBody.insertRow();
            const messageCell = row.insertCell();
            messageCell.colSpan = 2;
            messageCell.textContent = "Results for Japanese Grand Prix not found.";
        }

    } catch (error) {
        console.error("Error fetching or processing data:", error);
        const resultsTableBody = document.getElementById("resultsTableBody");
        const row = resultsTableBody.insertRow();
        const errorCell = row.insertCell();
        errorCell.colSpan = 2;
        errorCell.textContent = "Failed to load race results.";
    }
}

// Call the function to load the Japanese Grand Prix results when the script runs
loadJapanResults();