function checkPassword() {
    const password = document.getElementById("passwordInput").value.trim();
    if (password === "0501") { // 비밀번호를 "0501"로 설정
        document.getElementById("passwordContainer").classList.remove("active");
        document.getElementById("buttonContainer").classList.remove("hidden");
        document.getElementById("buttonContainer").classList.add("active");
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
}

function showSlider(buttonNumber) {
    let image1Src, image2Src;

    if (buttonNumber === 1) {
        image1Src = "image1a.jpg";
        // 버튼 1 클릭 시, 다음 이미지 버튼 숨기기
        document.getElementById("nextButton").classList.add("hidden");
        
        // 첫 번째 이미지만 보이도록 설정
        document.getElementById("image1").classList.add("active");
        document.getElementById("image2").classList.remove("active");
        document.getElementById("image1").src = image1Src;
        document.getElementById("image2").src = "";
    } else if (buttonNumber === 2) {
        image1Src = "image2a.jpg";
        image2Src = "image2b.jpg";
        // 버튼 2 클릭 시, 다음 이미지 버튼 보이기
        document.getElementById("nextButton").classList.remove("hidden");
        
        // 첫 번째 이미지만 보이도록 설정
        document.getElementById("image1").classList.add("active");
        document.getElementById("image2").classList.remove("active");
        document.getElementById("image1").src = image1Src;
        document.getElementById("image2").src = image2Src;
    }

    // 슬라이더와 버튼 컨테이너의 활성 상태 조정
    document.getElementById("buttonContainer").classList.remove("active");
    document.getElementById("sliderContainer").classList.remove("hidden");
    document.getElementById("sliderContainer").classList.add("active");
}

function showGallery() {
    // 버튼 컨테이너 숨기기
    document.getElementById("buttonContainer").classList.remove("active");
    document.getElementById("buttonContainer").classList.add("hidden");

    // 갤러리 컨테이너 보이기
    document.getElementById("galleryContainer").classList.remove("hidden");
    document.getElementById("galleryContainer").classList.add("active");
}

function nextImage() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    if (image1.classList.contains("active")) {
        image1.classList.remove("active");
        image2.classList.add("active");
    } else {
        image2.classList.remove("active");
        image1.classList.add("active");
    }
}

function goBackToButtons() {
    document.getElementById("sliderContainer").classList.remove("active");
    document.getElementById("buttonContainer").classList.remove("hidden");
    document.getElementById("buttonContainer").classList.add("active");

    // 갤러리 컨테이너 숨기기
    document.getElementById("galleryContainer").classList.remove("active");
    document.getElementById("galleryContainer").classList.add("hidden");
}

function goBack() {
    document.getElementById("buttonContainer").classList.remove("active");
    document.getElementById("passwordContainer").classList.add("active");
}
