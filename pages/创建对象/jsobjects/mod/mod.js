export default {
	microflow_global_object:["NewObject03","NewObject0103"],
	source_object: [
		{
			property: "id",
			value: "id",
		},
		{
			property: "name",
			value: "name",
		},
	],
	store:{
		objectName:"",
		isSubmit:false,
		iseventTrigger:false,
		propertyData: [
			{
				key:0,
				property:"",
				value:""
			}]
	},
	setObjectName:()=>{
	//	console.log("this",mod.store)
		if (mod.store.objectName=="")
			mod.store.objectName=mod.generateNewObjectName(mod.microflow_global_object,"NewObject");
		// if (this==""){
			// let name= mod.generateNewObjectName(mod.microflow_global_object,"NewObject");
			// return name;
		// }else{
			// return this.store.objectName;
		// }
	},
	//该数组必须有个key的属性
	findMaxKey:(ArrayData)=>{
		if (ArrayData.length === 0) {
			return 0; // 数组为空时返回 -1 或其他你认为合适的默认值
		}
		return Math.max(...ArrayData.map(item => item.key))+1;
	},
	generateNewObjectName:(array, baseName)=> {
		function findMaxNumberInArray(array, baseName) {
			const filteredNumbers = array
			.filter(name => name.startsWith(baseName))
			.map(name => parseInt(name.replace(baseName, ''), 10))
			.filter(number => !isNaN(number));

			return filteredNumbers.length > 0 ? Math.max(...filteredNumbers) : 0;
		}
		const maxNumber = findMaxNumberInArray(array, baseName);
		return `${baseName}${maxNumber + 1}`;
	}

};
