// Sample data for testing
let bids = [
    { username: "User1", amount: 10 },
    { username: "User2", amount: 15 },
    { username: "User3", amount: 12 }
];

// Display the existing bids
function displayBids() {
    let bidList = $("#bidList");
    bidList.empty();

    for (let bid of bids) {
        let listItem = $("<li>").text(`${bid.username} - $DECAY ${bid.amount}`);
        bidList.append(listItem);
    }
}

// Handle the form submission
$("#bidForm").submit(function(e) {
    e.preventDefault();

    // Get the bid amount from the input field
    let bidAmount = parseInt($("#bidAmount").val());

    // Check if the bid amount is valid
    if (isNaN(bidAmount) || bidAmount < 1) {
        alert("Invalid bid amount!");
        return;
    }

    // TODO: Get the username of the current user (You may implement user authentication)

    // Add the new bid to the list
    let newBid = { username: "CurrentUser", amount: bidAmount };
    bids.push(newBid);

    // Display the updated bid list
    displayBids();

    // Clear the bid amount input field
    $("#bidAmount").val("");
});

// Initial display of bids
displayBids();
