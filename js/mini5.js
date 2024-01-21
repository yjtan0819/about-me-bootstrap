const likeCounts = {
    'hobby-1': 0,
    'hobby-2': 0,
    'hobby-3': 0
};
let visitCount = 0;

// Function to handle liking a hobby
// 1st Dynamic element that updates the like count
function likeHobby(hobbyId) {
    if (likeCounts[hobbyId] === undefined) {
        likeCounts[hobbyId] = 0;
    }
    likeCounts[hobbyId]++;
    const likeCountElement = document.querySelector(`#${hobbyId} .like-count`);
    likeCountElement.textContent = likeCounts[hobbyId];
}

// 2nd Dynamic element that updates the visit count
function updateVisitCount() {
    visitCount++;
    document.getElementById('visit-count').textContent = visitCount;
}

// 1st Interactive Element: hide/show effect
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    updateVisitCount();
    return false;
    }

show('home', 'hobbies');  