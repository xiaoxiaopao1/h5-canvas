//判断大鱼和果实的距离
function momFruitCollsion(){
	if (!data.gameover) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if (l < 900) {
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if (mom.momBodyCount > 7) {
						mom.momBodyCount = 7;
					}
					if (fruit.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}

//大鱼和小鱼的碰撞
function momBabyCollsion(){
	if (data.fruitNum > 0 && !data.gameover) {
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if (l < 900) {
			baby.babyBodyCount = 0;
			// data.reset();
			mom.momBodyCount = 0;
			data.addScore();
			halo.born(baby.x,baby.y);
		}
	}
}