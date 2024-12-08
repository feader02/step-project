document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.services-menu');
    const contentImage = document.querySelector('.services-img-1');
    const contentText = document.querySelector('.services-p');
    const triangles = document.querySelectorAll('.triangle');
    const contentTexts = {
        "web-design":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "graphic-design":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Tristique risus nec feugiat in fermentum. Dui sapien eget mi proin sed libero enim sed.",
        "online-support":"Vestibulum sed arcu non odio euismod lacinia at. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Ut sem viverra aliquet eget sit. Enim eu turpis egestas pretium aenean. Tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Arcu risus quis varius quam. Sed faucibus turpis in eu. Eleifend donec pretium vulputate sapien nec sagittis. Mus mauris vitae ultricies leo integer.",
        "app-design":"Nisi scelerisque eu ultrices vitae auctor eu augue. Urna id volutpat lacus laoreet non curabitur gravida. Et tortor consequat id porta nibh venenatis cras. Gravida arcu ac tortor dignissim convallis aenean et tortor. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquet nibh praesent tristique magna sit amet. Purus sit amet volutpat consequat mauris nunc. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. A arcu cursus vitae congue mauris rhoncus aenean. Suscipit adipiscing bibendum est ultricies integer.",
        "online-marketing":"Praesent tristique magna sit amet. Amet consectetur adipiscing elit duis tristique. Nisl vel pretium lectus quam id leo in. Egestas sed tempus urna et pharetra pharetra. Nec tincidunt praesent semper feugiat. Urna molestie at elementum eu facilisis sed odio morbi. Egestas purus viverra accumsan in nisl. Et malesuada fames ac turpis. Malesuada fames ac turpis egestas integer eget aliquet nibh.",
        "seo-service":"Lobortis elementum nibh tellus molestie nunc non. Massa tincidunt dui ut ornare lectus sit amet. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Mauris pharetra et ultrices neque ornare. Vulputate eu scelerisque felis imperdiet proin. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Velit scelerisque in dictum non consectetur a erat nam at."
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            updateTab(item);
        });
    });

    function updateTab(selectedItem) {
        const tabId = selectedItem.getAttribute('data-tab');
        const selectedIndex = Array.from(menuItems).indexOf(selectedItem);

        contentText.textContent = contentTexts[tabId];
        contentImage.src = `images/${selectedItem.getAttribute('data-image')}.png`;

        triangles.forEach(triangle => {
            triangle.style.display = 'none';
        });

        const selectedTriangle = selectedItem.querySelector('.triangle');
        selectedTriangle.style.display = 'block';

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('selected');
            menuItem.style.backgroundColor = '';
            menuItem.style.color = '';
        });
        selectedItem.classList.add('selected');
        selectedItem.style.backgroundColor = '#18CFAB';
        selectedItem.style.color = 'white';
    }

    updateTab(menuItems[0]);
});
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".work-menu");
    const workImages = document.querySelectorAll(".work-image");
    const loadMoreButton = document.querySelector(".add-images.fix-margin-add");
    const imageContainerAll = document.querySelector(".work-image.all");


    const allTab = document.querySelector(".work-menu.fix-work");
    filterImages(allTab, workImages);
    highlightMenuItem(allTab, menuItems);

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            filterImages(item, workImages);
            highlightMenuItem(item, menuItems);
        });
    });

    loadMoreButton.addEventListener("click", function() {
        loadNewImages(imageContainerAll);
        loadMoreButton.style.display = "none";
    });
});

function filterImages(selectedItem, images) {
    const category = getCategoryFromItem(selectedItem);

    images.forEach(imageGroup => {
        const categoryImages = imageGroup.classList.contains(category);
        if (category === "fix-work" || categoryImages || category === "all") {
            imageGroup.style.display = "block";
        } else {
            imageGroup.style.display = "none";
        }
    });
}

function getCategoryFromItem(item) {
    if (item.classList.contains("fix-work")) {
        return "fix-work";
    } else {
        return item.textContent.toLowerCase().replace(" ", "-");
    }
}

function highlightMenuItem(selectedItem, menuItems) {
    menuItems.forEach(menuItem => {
        menuItem.style.border = " 0.5px solid #DADADA";
        menuItem.style.color = "#717171";
    });
    selectedItem.style.border = "2px solid #18CFAB";
    selectedItem.style.color = "#18CFAB";
}

function loadNewImages(imageContainer) {
    const newImageUrls = [
        "images/add-shadow-1.png",
        "images/add-shadow-2.png",
        "images/add-shadow-3.png",
        "images/add-shadow-4.png",
        "images/add-morph-1.png",
        "images/add-morph-2.png",
        "images/add-morph-3.png",
        "images/add-morph-4.png",
        "images/add-arc-1.png",
        "images/add-arc-2.png",
        "images/add-arc-3.png",
        "images/add-arc-4.png",
        "images/add-pudge-1.png",
        "images/add-pudge-2.png",
        "images/add-pudge-3.png",
        "images/add-pudge-4.png"
    ];

    newImageUrls.forEach(url => {
        const newImage = document.createElement("img");
        newImage.src = url;
        newImage.alt = "New Image";
        imageContainer.appendChild(newImage);
    });
}
$(document).ready(function() {
    let currentIndex = 0;
    const feedbackData = [
        {
            text: "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
            name: "Larissa Meek",
            profession: "Web-Designer",
            image: "images/feedback-2.png"
        },
        {
            text: "Morbi ultricies luctus,pulvinar odio eget aliquam facilisis. Tempus quam dui laoreet sem, non dictum odio nisi quis massa.Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
            name: "Jonathan Ackley",
            profession: "Game-Designer",
            image: "images/feedback-3.png"
        },   {
            text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
            name: "Hasan Ali",
            profession: "UX Designer",
            image: "images/feedback-4.png"
        },   {
            text: "Morbi tempus ultricies luctus,pulvinar odio eget aliquam facilisis. Quam dui laoreet sem, non dictum odio nisi quis massa.Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
            name: "Cathy Pearl",
            profession: "UI Designer",
            image: "images/feedback-5.png"
        }
    ];


    const animationDuration = 400;
    const slideOffset = 10;

    function updateSelectedPerson(selectedIndex) {
        const selectedData = feedbackData[selectedIndex];
        const $selectedImage = $(".selected-person-image");
        const $carouselImages = $(".feedback-carousel-img");

        $selectedImage.fadeOut(animationDuration / 2, function() {
            $selectedImage.attr("src", selectedData.image).fadeIn(animationDuration / 2);
        });

        $(".selected-person-name").text(selectedData.name);
        $(".selected-person-profession").text(selectedData.profession);
        $(".selected-person-text").text(selectedData.text);

        currentIndex = selectedIndex;

        $carouselImages.css("top", 0);
        $carouselImages.eq(selectedIndex).css("top", -slideOffset);
    }

    $(".feedback-carousel-img").click(function() {
        const selectedIndex = $(this).index() - 1;
        if (selectedIndex >= 0 && selectedIndex < feedbackData.length) {
            updateSelectedPerson(selectedIndex);
        }
    });

    $(".arrow-left").click(function() {
        const newIndex = (currentIndex - 1 + feedbackData.length) % feedbackData.length;
        updateSelectedPerson(newIndex);
    });

    $(".arrow-right").click(function() {
        const newIndex = (currentIndex + 1) % feedbackData.length;
        updateSelectedPerson(newIndex);
    });
    updateSelectedPerson(currentIndex);
});


const newImages = [
    "images/grid/grid-1.png",
    "images/grid/grid-2.png",
    "images/grid/grid-6.png",
    "images/grid/grid-5.png",
    "images/grid/grid-2.png",
    "images/grid/grid-1.png",
    "images/grid/grid-9.png",
    "images/grid/grid-5.png",
    "images/grid/grid-6.png"
];
let imageCounter = 0;

function updateLoadMoreVisibility() {
    const loadMoreButtons = document.querySelectorAll(".load-more-button");

    loadMoreButtons.forEach(button => {
        if (imageCounter >= newImages.length) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    });
}

function addImages() {
    const imageContainers = document.querySelectorAll(".image-container");
    const imagesToAdd = 9;

    imageContainers.forEach(container => {
        for (let i = 0; i < imagesToAdd; i++) {
            if (imageCounter < newImages.length) {
                const imgElement = document.createElement("img");
                imgElement.src = newImages[imageCounter];
                imgElement.alt = "New Image";
                container.appendChild(imgElement);
                imageCounter++;
            }
        }
    });

    updateLoadMoreVisibility();
}

const loadMoreButtons = document.querySelectorAll(".load-more-button");

loadMoreButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        addImages();
    });
});

updateLoadMoreVisibility();