const d = {
    labels: ["HTML/CSS", "JavaScript", "C# (.NET)", "VueJs", "ReactJs", "AWS"],
    datasets: [
        {
            backgroundColor: [
                "#c96249",
                "#e48050",
                "#eec16c",
                "#819e89",
                "#82b2cd",
                "#a08ebd",
            ],
            data: [100, 90, 80, 70, 50, 20],
        },
    ],
};

const opt = {
    responsive: true,
    maintainAspectRatio: false,
};

const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "doughnut",
    data: d,
    options: opt,
});
