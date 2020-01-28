$(function(){ 
		DWZ.init("dwz.frag.xml", {
				 loginUrl:"login.php",
				 statusCode:{ok:200, error:300, timeout:301},
		 		 pageInfo:{pageNum:"pageNum", numPerPage:"numPerPage", orderField:"orderField", orderDirection:"orderDirection"},
				 debug:false,
				 callback:function(){
					initEnv();
					$("#themeList").theme({themeBase:"dwz/themes"});
			 	}
		});
});