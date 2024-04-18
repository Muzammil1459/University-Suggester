document.getElementById('inputForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Fetch form values
  const name = document.getElementById('name').value;
  const gpa = parseFloat(document.getElementById('gpa').value);
  const testScore = parseInt(document.getElementById('testScore').value);
  const extracurricular = document.getElementById('extracurricular').value;
  const preferences = document.getElementById('preferences').value;
  
  // Placeholder logic for university matching
  const recommendedUniversities = matchUniversities(name, gpa, testScore, extracurricular, preferences);
  
  // Display recommended universities
  displayUniversities(recommendedUniversities);
});

function matchUniversities(name, gpa, testScore, extracurricular, preferences) {
  // Placeholder function for university matching logic
  // Implement your matching algorithm here
  
  // Example: Return a hardcoded list of universities
  return [
    { name: 'University A', location: 'London', ranking: 1 },
    { name: 'University B', location: 'Manchester', ranking: 2 },
    { name: 'University C', location: 'Edinburgh', ranking: 3 }
  ];
}

function displayUniversities(universities) {
  const universityList = document.getElementById('universityList');
  universityList.innerHTML = ''; // Clear previous list
  
  universities.forEach(function(university) {
    const listItem = document.createElement('li');
    listItem.textContent = `${university.name} - ${university.location} (Ranking: ${university.ranking})`;
    universityList.appendChild(listItem);
  });
}
