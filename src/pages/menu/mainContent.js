
const createContent = () =>{
    return `
            <!-- Main Coffees -->
            <div id="mainComponent" class="w-full lg:max-w-[80%] max-w-[100%] productComponent">
                <h2 class="mt-2 font-bold text-xl lg:text-3xl">Menu</h2>
                <!-- Drink -->
                <div class="mt-8">
                    <h2 class="font-bold text-xl lg:text-3xl">Drink</h2>
                    <hr class="mt-4 pb-6" />

                    <div class="grid md:grid-cols-2 lg:gap-8 gap-4">
                        <!-- Card for Hot Coffees -->
                        <button class="productBtn flex items-center gap-4" id="hotCoffeesBtn"
                            data-target="hotCoffeesComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-cover" src="../../images/menu/1.png"
                                    alt="Hot Coffees" />
                                <h4 class="text-lg lg:text-xl">Hot Coffees</h4>
                            </div>
                        </button>

                        <!-- Card for Cold Coffees -->
                        <button class="productBtn flex items-center gap-4" id="coldCoffeesBtn"
                            data-target="coldCoffeesComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/2.png"
                                    alt="Cold Coffees" />
                                <h4 class="text-lg lg:text-xl">Cold Coffees</h4>
                            </div>
                        </button>

                        <!-- Card for Starbucks Refreshers Beverages -->
                        <button class="productBtn flex items-center gap-4" id="starbucksRefreshersBeveragesBtn"
                            data-target="starbucksRefreshersBeveragesComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/3.png"
                                    alt="Starbucks Refreshers Beverages" />
                                <h4 class="text-lg lg:text-xl">
                                    Starbucks Refreshers Beverages
                                </h4>
                            </div>
                        </button>

                        <!-- Card for Frappuccino Blended Beverages -->
                        <button class="productBtn flex items-center gap-4" id="frappuccinoBlendedBeveragesBtn"
                            data-target="frappuccinoBlendedBeveragesComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/4.png"
                                    alt="Frappuccino Blended Beverages" />
                                <h4 class="text-lg lg:text-xl">
                                    Frappuccino Blended Beverages
                                </h4>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- Food -->
                <div class="mt-8">
                    <h2 class="font-bold text-xl lg:text-3xl">Food</h2>
                    <hr class="mt-4 pb-6" />

                    <div class="grid md:grid-cols-2 lg:gap-8 gap-4">
                        <!-- Card for Hot Breakfast -->
                        <button class="productBtn flex items-center gap-4" id="hotBreakfastBtn"
                            data-target="hotBreakfastComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/food1.png"
                                    alt="Hot Breakfast" />
                                <h4 class="text-lg lg:text-xl">Hot Breakfast</h4>
                            </div>
                        </button>

                        <!-- Card for Bakery -->
                        <button class="productBtn flex items-center gap-4" id="oatmealYogurtBtn"
                            data-target="oatmealYogurtComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/food2.png"
                                    alt="Bakery" />
                                <h4 class="text-lg lg:text-xl">Oatmeal & Yogurt</h4>
                            </div>
                        </button>
                        <button class="productBtn flex items-center gap-4" id="bakeryBtn" data-target="bakeryComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/food5.png"
                                    alt="Bakery" />
                                <h4 class="text-lg lg:text-xl">Bakery</h4>
                            </div>
                        </button>
                        <button class="productBtn flex items-center gap-4" id="lunchBtn" data-target="lunchComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/food3.png"
                                    alt="Bakery" />
                                <h4 class="text-lg lg:text-xl">Lunch</h4>
                            </div>
                        </button>
                        <button class="productBtn flex items-center gap-4" id="snackSweetsBtn"
                            data-target="snacksSweetsComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain" src="../../images/menu/food4.png"
                                    alt="Bakery" />
                                <h4 class="text-lg lg:text-xl">Snacks & Sweets</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- At Home Coffee -->
                <div class="mt-8">
                    <h2 class="font-bold text-xl lg:text-3xl">At Home Coffee</h2>
                    <hr class="mt-4 pb-6" />

                    <div class="grid md:grid-cols-2 lg:gap-8 gap-4">
                        <!-- Card for Whole Bean -->
                        <button class="productBtn flex items-center gap-4" id="wholeBeanBtn"
                            data-target="wholeBeanComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain rounded-full"
                                    src="../../images/menu/cold-cup-img/p1.jpg" alt="Whole Bean" />
                                <h4 class="text-lg lg:text-xl">Whole Bean</h4>
                            </div>
                        </button>

                        <!-- Card for VIA® Instant -->
                        <button class="productBtn flex items-center gap-4" id="viaInstantBtn"
                            data-target="viaInstantComponent">
                            <div class="flex items-center text-start gap-4">
                                <img class="lg:w-28 lg:h-28 w-20 h-20 object-contain rounded-full"
                                    src="../../images/menu/cold-cup-img/p2.jpg" alt="VIA® Instant" />
                                <h4 class="text-lg lg:text-xl">VIA® Instant</h4>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
    
    `
}