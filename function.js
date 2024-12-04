// ----------------------------------------------- USED ---------------------------------------------------------------- 



//header flexible function

// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the visibility of the header based on window width
    function toggleHeaderVisibility() {
        var header = document.getElementById('header'); // Select the element with id 'header'
        if (header) { // Check if the element exists
            if (window.innerWidth < 980) {
                header.style.display = 'none'; // Hide header without affecting layout
                document.getElementById("sidebarIcon").style.display = "block";
            } else {
                header.style.display = 'block';

            }
        }
    }

    // Run the function on page load
    toggleHeaderVisibility();

    // Run the function every time the window is resized
    window.addEventListener('resize', toggleHeaderVisibility);
});



//close advertisement
function closeAd() {
    document.getElementById("advertisement").style.display = "none";

}

//Bring To Function -> function to bring use to section selected
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


//open Whatsapp Introduction
function openWhatsapp() {
    document.getElementById("whatsappBackground").style.display = "block";

}




//close Whatsapp Introduction
function closeWhatsapp() {
    document.getElementById("whatsappBackground").style.display = "none";

}





//whatsapp contact
function callWhatsapp() {
    const whatsappNumber = "60164771238"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hello, I would like to get more information about Perai - GEM Resident!"); // Customize this message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}



//Gallery Pop-Up
const images = [
    { src: 'image/backgroundPic8.png', name: 'Location' },
    { src: 'image/backgroundPic2.png', name: 'Grand Entrance' },
    { src: 'image/backgroundPic7.png', name: 'Side Way' },
    { src: 'image/backgroundPic1.png', name: 'Olympic Ocean Pool' },
    { src: 'image/descriptionPic1.png', name: 'Sky Lounge' },
    { src: 'image/descriptionPic4.png', name: 'KTV Room' },
    { src: 'image/backgroundPic3.png', name: 'Multipurpose Hall' },
    { src: 'image/descriptionPic3.png', name: 'Signature Gym' },

  ];
  
  let currentIndex = 0;
  
  function openPopup(index) {
    currentIndex = index;
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const imageName = document.getElementById('imageName');
  
    popupImage.src = images[currentIndex].src;
    imageName.textContent = images[currentIndex].name;
  
    popup.style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
  
    const popupImage = document.getElementById('popupImage');
    const imageName = document.getElementById('imageName');
  
    popupImage.src = images[currentIndex].src;
    imageName.textContent = images[currentIndex].name;
  }
  


//Layout Pop-Up
const layoutImages = [
    { src: 'image/A1.png', name: 'Type A' },
    { src: 'image/B1.png', name: 'Type B1' },
    { src: 'image/B2.png', name: 'Type B2' },
    { src: 'image/C1.png', name: 'Type C1' },
    { src: 'image/C2.png', name: 'Type C2' },
    { src: 'image/C3.png', name: 'Type C3' }
  ];
  
  let currentLayoutIndex = 0;
  
  function openLayoutPopup(index) {
    currentLayoutIndex = index;
    const layoutPopup = document.getElementById('layoutPopup');
    const layoutPopupImage = document.getElementById('layoutPopupImage');
    const layoutImageName = document.getElementById('layoutImageName');
  
    layoutPopupImage.src = layoutImages[currentLayoutIndex].src;
    layoutImageName.textContent = layoutImages[currentLayoutIndex].name;
  
    layoutPopup.style.display = 'flex';
  }
  
  function closeLayoutPopup() {
    document.getElementById('layoutPopup').style.display = 'none';
  }
  
  function changeLayoutImage(direction) {
    currentLayoutIndex = (currentLayoutIndex + direction + layoutImages.length) % layoutImages.length;
  
    const layoutPopupImage = document.getElementById('layoutPopupImage');
    const layoutImageName = document.getElementById('layoutImageName');
  
    layoutPopupImage.src = layoutImages[currentLayoutIndex].src;
    layoutImageName.textContent = layoutImages[currentLayoutIndex].name;
  }
  


  document.addEventListener("DOMContentLoaded", function () {
    const welcomeDiv = document.querySelector(".welcomeDiv");
    const highlightsPointDiv = document.querySelector(".highlightsPointDiv");
    const highlightsDesc = document.querySelector(".highlightsDesc");
    const highlightsTitle = document.querySelector(".highlightsTitle");
    const factsheetTitle = document.querySelector(".factsheetTitle");
    const breakIntroduce = document.querySelector(".break-Introduce");
    const contactBackground = document.querySelector(".contact-background");
    const galleryTitle = document.querySelector(".galleryTitle");
    const contactBackground2 = document.querySelector(".contact-background2");
    const layoutTitle= document.querySelector(".layoutTitle");
    const contactBackground3= document.querySelector(".contact-background3");
    const placeTitle= document.querySelector(".placeTitle");
    const placeDescription= document.querySelector(".placeDescription");
    const iframeMap= document.querySelector(".iframeMap");
    const factsheetTable= document.querySelector(".factsheetTable");

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Stop observing the element once it becomes visible
                observerInstance.unobserve(entry.target);
            }
        });
    });

    // Observe the elements
    if (welcomeDiv) observer.observe(welcomeDiv);
    if (highlightsPointDiv) observer.observe(highlightsPointDiv);
    if (highlightsDesc) observer.observe(highlightsDesc);
    if (highlightsTitle) observer.observe(highlightsTitle);
    if (factsheetTitle) observer.observe(factsheetTitle);
    if (breakIntroduce) observer.observe(breakIntroduce);
    if (contactBackground) observer.observe(contactBackground);
    if (galleryTitle) observer.observe(galleryTitle);
    if (contactBackground2) observer.observe(contactBackground2);
    if (layoutTitle) observer.observe(layoutTitle);
    if (contactBackground3) observer.observe(contactBackground3);
    if (placeTitle) observer.observe(placeTitle);
    if (placeDescription) observer.observe(placeDescription);
    if (iframeMap) observer.observe(iframeMap);
    if (factsheetTable) observer.observe(factsheetTable);
});



// ----------------------------------------------- END USED ---------------------------------------------------------------- 



// ------------------------------------------------------------------------------------------------------------------------- 
// ------------------------------------------------------------------------------------------------------------------------- 



