!(() => {
	const $ = (a, b) => a.querySelector(b);
	const all = $(document, ".all");
	const hex_txt = $(all, ".text");
	const btn = $(document, ".btn");
	const hex_arr = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8"];

	btn.addEventListener("click", () => {
		let h = "#";
		for (let s = 0; s < 6; s++) {
			let random = Math.floor(Math.random() * hex_arr.length);
			const color = h += hex_arr[random];
			console.log(color)
			hex_txt.innerText = color;

			document.body.style.background = color;
		}
	})
	hex_txt.addEventListener("click",()=>{
		try{
			let elem = document.createElement("textarea");

			elem.value=hex_txt.innerText;

			let copy = elem.value;

			if(!copy)return;

			document.body.appendChild(elem)

			elem.select();

			document.execCommand("copy");

			alert("text copied to clipboard")

			elem.remove();
		}
		catch(e){console.log(e)}
	})
})()