// name, team, nationality, jerseyNumber, age, and an Image URL for the player.

const players = [
    {
        name : "Mohamed Salah",
        team : "Liverpool",
        nationality : "Egypt",
        jerseyNumber : "11",
        age : "31",
        imageUrl : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc4bnfG3zNmNB6Dk4C3vge8FxKkdFH64E96jiW8FKdS_04gDdF"
    },
    {
        name : "Kylian Mbappé",
        team : "PSG",
        nationality : "France",
        jerseyNumber : "7",
        age : "24",
        imageUrl : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm1IwsPZDVXMagZrFcX2o8neNG5SoTD1Gxnx1A_ApzHw3TBcuP"
    },
    {
        name : "Robert Lewandowski",
        team : "Barcelona",
        nationality : "Poland",
        jerseyNumber : "9",
        age : "34",
        imageUrl : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSx5EKZHirVVSRbMBJrvERDeZ5p1L6k_nAjIZMxKQKh4ElDakW"
    },
    {
        name : "Cristiano Ronaldo",
        team : "Al Nassr",
        nationality : "Portugal",
        jerseyNumber : "7",
        age : "38",
        imageUrl : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-32SBacPtEbz50hIW3B-pfs_jzSoS7hvLJ527G-yYnlHYI5pF"
    },
];

const jsonPlayers = JSON.stringify(players);

export default jsonPlayers;