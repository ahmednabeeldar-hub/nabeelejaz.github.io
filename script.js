const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const identifyBtn = document.getElementById("identifyBtn");
const plantResult = document.getElementById("plantResult");

imageInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
        }

        reader.readAsDataURL(file);
    }
});

identifyBtn.addEventListener("click", function(){

    if(!imageInput.files.length){
        alert("Please upload an image first.");
        return;
    }

    plantResult.innerHTML = `
        <h3>Sample Result</h3>

        <p><strong>Plant Name:</strong> Rose</p>

        <p><strong>Scientific Name:</strong> Rosa</p>

        <p><strong>Family:</strong> Rosaceae</p>

        <p><strong>Description:</strong>
        Roses are flowering shrubs known for their beautiful blooms.
        </p>

        <p><strong>Water Requirements:</strong>
        Moderate watering.
        </p>

        <p><strong>Sunlight:</strong>
        Full Sun.
        </p>

        <p><strong>Uses:</strong>
        Ornamental gardens, perfumes, decoration.
        </p>
    `;
});
