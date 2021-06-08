<a className="expand_food_exclusions col-12" href="#" value={this.state.hide} onClick={this.onShow} >Expand all exclusions</a>
                                    {this.state.hide !== false ? (
                                        <div className="row">
                                            <label className="col-12 col-form-label">Common allergies</label>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group " >
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a >Fish</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a>Salmon</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a>Tuna</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a>Tilapia</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a>Sardines</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fish !== 1 ? null : unSelect} onClick={() => this.onSelect(1)}><a>Trout & Snapper</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Dairy</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Milk</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Cream</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Cheese</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Yogurt</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Cottage Cheese</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.dairy !== 3 ? null : unSelect} onClick={() => this.onSelect(3)}><a>Whey Powder</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.soy !== 5 ? null : unSelect} onClick={() => this.onSelect(5)}><a>Soy</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.soy !== 5 ? null : unSelect} onClick={() => this.onSelect(5)}><a>Tofu</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.soy !== 5 ? null : unSelect} onClick={() => this.onSelect(5)}><a>Soy Milk</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Fats & Nuts</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Avocado</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Peanuts</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Almonds</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Walnuts</a>
                                                    </li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fats !== 4 ? null : unSelect} onClick={() => this.onSelect(4)}><a>Pecans</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)} ><a>Vegetables</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Asparagus</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Beets</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Broccoli</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Carrots</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Sprouts</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Celery</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Peppers</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Tomato</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.vegetables !== 6 ? null : unSelect} onClick={() => this.onSelect(6)}><a>Eggplant</a></li>

                                                </ul>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Fruit</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Banana</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Grapes</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Orange</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Strawberries</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Raspberries</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Blueberries</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.fruit !== 7 ? null : unSelect} onClick={() => this.onSelect(7)} ><a>Fruit juice</a></li>

                                                </ul>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.meat !== 8 ? null : unSelect} onClick={() => this.onSelect(8)} ><a>Red Meat</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.meat !== 8 ? null : unSelect} onClick={() => this.onSelect(8)} ><a>Beef</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.meat !== 8 ? null : unSelect} onClick={() => this.onSelect(8)} ><a>Pork/Bacon</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.meat !== 8 ? null : unSelect} onClick={() => this.onSelect(8)} ><a>Lamb</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.meat !== 8 ? null : unSelect} onClick={() => this.onSelect(8)} ><a>Veal</a></li>

                                                </ul>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <ul className="nav nav-list tight-nav col-8 list-group">
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.legumes !== 2 ? null : unSelect} onClick={() => this.onSelect(2)}><a>Legumes</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.legumes !== 2 ? null : unSelect} onClick={() => this.onSelect(2)}><a>Beans</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.legumes !== 2 ? null : unSelect} onClick={() => this.onSelect(2)}><a>Lentils</a></li>
                                                    <li className="btn btn-light list-group-item col-12" style={this.state.legumes !== 2 ? null : unSelect} onClick={() => this.onSelect(2)}><a>Peas</a></li>

                                                </ul>
                                            </div>
                                        </div>

                                    ) : null}
