<script>
// @ is an alias to /src
export default {
  name: 'home',
}
</script>

<template>
    <div id="home-view-container">
        <div id="home-header">
	    <p id="name">Fareed Idris</p>
	    <p id="header-quote">Hi! Welcome to my website! Might not seem like much now, but not to worry, it's all still under construction. My projects page however is up and running so click here to get there now, or use the navbar on your left.</p>
	</div>
	<div id="view-card-container">
            <div class="view-card image-card">
	        <img src="#">
            </div>
            <div class="view-card">
	        <h4>Hi, welcome to my website!</h4>
	        <p>Lorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sitr sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etcLorem ipsum dolor sit amet etc</p>
            </div>
	</div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';
#home-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    #name {
        font-size: 40px;
	font-weight: bold;
    }
    #header-quote {
        text-align: center;
    }
}

#home-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 85%;
    margin-left: 15%;
    padding-left: 10%;
    padding-right: 10%;
}

#view-card-container {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 100%;
    .view-card {
        display: flex;
	flex-direction: column;
	justify-content: center;
	height: 400px;
	width: 40%;
	border: 1px solid;
	margin: 10px;
	text-align: center;
	border-radius: 20px;
	@extend %shadow-normal;
    }
}
</style>
