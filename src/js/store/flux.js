const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planet: [],
			vehicle: [],
			watchlist: [],
		
		},
		actions: 
			{ 
			getCharacter: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(body => setStore({character: body.results}))
				.catch(error => console.log("error", error));
			},
			getPlanet: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(body => setStore({planet: body.results}))
				.catch(error => console.log("error", error));
			},
			getVehicle: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(body => setStore({vehicle: body.results}))
				.catch(error => console.log("error", error));
			},
			addItem: (char) => {
				const store = getStore();
				let list = store.watchlist;
				setStore({watchlist: list.concat(char)})
				console.log(list)
			},

			removeItem: (id) => {
				const store = getStore();
				const wList = store.watchlist.filter(key => key !== id)
				console.log(wList);
				console.log("Yeaah");
				setStore({watchlist: wList})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
