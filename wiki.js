
$(document).ready(function(){
	$('#regardebtn').click(function(){
		let regardeMot = $('#regarde').val();
		if (regardeMot){
		let urlAvecMot = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + regardeMot + "&format=json&callback=?"; 
		$.ajax({
			type: "GET",
			dataType: "json",
			url: urlAvecMot,
			success: function(donnes){
				console.log(donnes);
				let html = "";
				for(var i = 0; i < 10; i++){
					if(donnes[1][i]){
					html += "<i class='resultados mt-2'><h3 class='subtitle'>" +donnes[1][i]+"</h3></br><h5 class='mb-5'>"+ donnes[2][i]+"<a href='"+donnes[3][i]+"' target='blank'> Read More...</a></h5></i>";
				console.log(donnes[1][i]);
					}
				}
				$("#sortie").html(html);
				$("#regarde").val('');
			},
			error: function(errorMesage){
				alert("Error");
				}
			});
		}
	});
	$("#regarde").keypress(function(key){
		
		if (key.which==13){
			$("#regardebtn").click();
			} 
		});
});