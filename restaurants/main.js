const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(card => {
    const searchData = card.getAttribute('data-search');
    if (searchData.includes(searchTerm)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});

const copyBtns = document.getElementsByClassName("clipboard");

for (let i = 0; i < copyBtns.length; i++) {
  let copytext = copyBtns[i].parentNode.innerText;
  copyBtns[i].addEventListener("click", function(){
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(copytext);
    } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = copytext;
            
        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
  });
}
