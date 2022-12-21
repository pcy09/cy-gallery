window.addEventListener("load", () => {
	// Masonory 레이아웃(Isotope 플러그인 이용)
	const iso = new Isotope("section", {
		// options
		itemSelector: "article",
	});

	const filterBtn = document.querySelectorAll(".btns>li");

	for (let el of filterBtn) {
		//배열(filterBtn)의 아이템(갯수) 만큼 반복
		el.addEventListener("click", (e) => {
			e.preventDefault();
			for (let el of filterBtn) {
				//클릭할 때 각 아이템(버튼)에 반복
				el.classList.remove("on");
			}

			// 클릭한 버튼에 클라스 넣어줌
			e.currentTarget.classList.add("on");

			const filtering = e.currentTarget.querySelector("a").getAttribute("href");
			console.log(filtering);
			console.log(iso);

			iso.arrange({ filter: filtering });
			// 버튼을 누르면 필터링 작동
		});
	}

	// 각 article을 클릭하면 팝업창이 뜨게
	const items = document.querySelectorAll("article"); //각 article들을 변수에 (배열형식)
	const pop = document.querySelector("#popup"); //각 article들을 변수에 (배열형식)

	for (const aa of items) {
		aa.addEventListener("click", (e) => {
			//화면 너비구하기
			const winWidth = document.body.clientWidth;
			console.log(winWidth);

			if (winWidth > 767) {
				// 화면 너비가 767px보다 컸을때만 적용
				// 클릭한 article img의 src값, h2,p를 변수에 저장
				const img = e.currentTarget.querySelector("img").getAttribute("src");
				const title = e.currentTarget.querySelector("h2").innerText;
				const desc = e.currentTarget.querySelector("p").innerText;

				// pop에 위의 변수를 적용
				pop.querySelector("img").setAttribute("src", img);
				pop.querySelector("h2").innerText = title;
				pop.querySelector("p").innerText = desc;

				pop.classList.add("on");
			}
		});
	}

	// popup창을 클릭하면 popup창이 사라짐
	pop.addEventListener("click", () => {
		pop.classList.remove("on");
	});

	window.addEventListener("resize", () => {
		let winWidth = document.body.clientWidth;
		if (winWidth < 767) {
			pop.classList.remove("on");
		}
	});
});
