new Vue({
	el: "#app",
	data: {
		textVal: "",
		items: [{
				con: "学习javascript"
			},
			{
				con: "学习vue.js"
			},
			{
				con: "搞一个大牛项目"
			},{
				con:"查看是否更改成功"
			}
		]
	},
	methods: {
		delFun: function(index) {
			this.items.splice(index, 1);
		},
		addFun: function() {
			//实现判断数组中是否有元素存在
			/*没有将执行以下*/
			if(this.items.length==0){
				if(this.textVal == "") {
					alert("待办项目不能为空");
				}else{
					//在所有判断完之后如果没有将添加，所以要注意结构是先便利所有的con内容，没有再进行添加
					newobj = {
						con: this.textVal
					}
					/*unshift() 在数组前端添加任意个项并返回新数组长度*/
					this.items.unshift(newobj);
				}
			}else{
			 /* for(var s = 0; s < this.items.length; s++) {*/
				if(this.textVal == "") {
					alert("待办项目不能为空");
				} else {
					//用for便利items判断是否添加内容重复，
					for(var s = 0; s < this.items.length; s++) {
						if(this.textVal == this.items[s].con) {
							alert("项目重复");
							this.textVal='';
						}
					}
					//在所有判断完之后如果没有将添加，所以要注意结构是先便利所有的con内容，没有再进行添加
					newobj = {
						con: this.textVal
					}
					/*unshift() 在数组前端添加任意个项并返回新数组长度*/
					this.items.unshift(newobj);
				}
			  /*}*/
            }
		}
	}
})