<div className="modal-content col-8 mx-auto">
                    <div className="col-1 ml-auto pl-5 pt-3">
                        <button type="button" class="btn btn-danger" onClick={this.props.onClose}>X</button>
                    </div>
                    <div className="modal-header col-8"><button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 className="modal-title">Nutrition Profile Options</h4>
                    </div>
                    <div className="container" />
                    <div className="modal-body col-12">
                        <div className="col-12">
                            <div id="editForm">
                                <form className="condensed_form form-horizontal row col-12" id="calculator_form">
                                    <fieldset className="col-12 offset-md-1 col-md-12">
                                        <div className="form-group row"><label htmlFor="nutrition_profile_title" className="col-sm-2 col-form-label">Title</label>
                                            <div className="col-sm-10" data-editors="title" name="nutrition_profile_title" id="nutrition_profile_title"><input id="c1089_title" className="form-control" name="title" maxLength={110} type="text" /></div>
                                        </div>
                                        <div className="form-group row"><label htmlFor="nutrition_profile_description" className="col-sm-2 col-form-label">Description</label>
                                            <div className="col-sm-10" data-editors="description" name="nutrition_profile_description" id="nutrition_profile_description"><input id="c1089_description" className="form-control" name="description" type="text" /></div>
                                        </div><br />

                                        <div className="card bg-light">
                                            <div className="card-body">
                                                <div className="form-group secondary_cal_input row"><label htmlFor="2nd_cal_input" className="col-12 col-md-2 col-form-label" style={{ paddingRight: 0 }}>Calories</label>
                                                    <div className="col-12 col-md-3" data-editors="calories" id="2nd_cal_input"><input id="c1089_calories" className="form-control" name="calories" step={50} type="number" /></div>
                                                </div>

                                                <div className="macro_ranges">Select the range of each macronutrient you want in your diet. A more flexible range will give you much more variety in your meals.<div className="form-group row" id="carbs_range"><label htmlFor="carbs" className="col-3 pr-0 col-form-label">Carbs :</label>
                                                    <div id="carbs" className="col-9">
                                                        <div className="row">
                                                            <div data-editors="min_carbs" className="col-sm-3 col-4 min_input"><input id="c1089_min_carbs" className="form-control" name="min_carbs" type="number" step="any" min={0} /></div><span className="form_input_label">g - </span>
                                                            <div data-editors="max_carbs" className="col-sm-3 col-4 max_input"><input id="c1089_max_carbs" className="form-control" name="max_carbs" type="number" step="any" min={0} /></div><span className="form_input_label">g</span>
                                                        </div>
                                                    </div><br />

                                                </div>
                                                    <div className="form-group row" id="fats_range"><label htmlFor="fats" className="col-3 pr-0 col-form-label">Fat:</label>
                                                        <div id="fats" className="col-9">
                                                            <div className="row">
                                                                <div data-editors="min_fats" className="col-sm-3 col-4 min_input"><input id="c1089_min_fats" className="form-control" name="min_fats" type="number" step="any" min={0} /></div><span className="form_input_label">g - </span>
                                                                <div data-editors="max_fats" className="col-sm-3 col-4 max_input"><input id="c1089_max_fats" className="form-control" name="max_fats" type="number" step="any" min={0} /></div><span className="form_input_label">g</span>
                                                            </div>
                                                        </div><br />

                                                    </div>
                                                    <div className="form-group row" id="proteins_range"><label htmlFor="proteins" className="col-3 pr-0 col-form-label">Protein:</label>
                                                        <div id="proteins" className="col-9">
                                                            <div className="row">
                                                                <div data-editors="min_proteins" className="col-sm-3 col-4 min_input"><input id="c1089_min_proteins" className="form-control" name="min_proteins" type="number" step="any" min={0} /></div><span className="form_input_label">g - </span>
                                                                <div data-editors="max_proteins" className="col-sm-3 col-4 max_input"><input id="c1089_max_proteins" className="form-control" name="max_proteins" type="number" step="any" min={0} /></div><span className="form_input_label">g</span>
                                                            </div>
                                                        </div><br />

                                                    </div>
                                                    <div className="min_macro_validation" />
                                                    <div className="max_macro_validation" />
                                                </div>
                                                <div className="macro_percents" style={{ display: 'none' }}>
                                                    <div className="alert alert-warning">
                                                        <p><span className="badge badge-warning">Please note</span> Targeting macros as a percentage of calories will give significantly less variety in your meal plans, simply because your nutrition requirements are much more specific.</p>
                                                    </div>Percentages (Must add to 100%)<br /><br />
                                                    <div className="form-group row"><label htmlFor="carbs_percent" className="col-sm-2 col-form-label">Carbs:</label>
                                                        <div className="col-sm-3 col-4" data-editors="percent_carbs" id="carbs_percent"><input id="c1089_percent_carbs" className="form-control" name="percent_carbs" type="number" step="any" min={0} /></div><span className="form_input_label">%</span>
                                                    </div>
                                                    <div className="form-group row"><label htmlFor="fats_percent" className="col-sm-2 col-form-label">Fat:</label>
                                                        <div className="col-sm-3 col-4" data-editors="percent_fats" id="fats_percent"><input id="c1089_percent_fats" className="form-control" name="percent_fats" type="number" step="any" min={0} /></div><span className="form_input_label">%</span>
                                                    </div>
                                                    <div className="form-group row"><label htmlFor="proteins_percent" className="col-sm-2 col-form-label">Protein:</label>
                                                        <div className="col-sm-3 col-4" data-editors="percent_proteins" id="proteins_percent"><input id="c1089_percent_proteins" className="form-control" name="percent_proteins" type="number" step="any" min={0} /></div><span className="form_input_label">%</span>
                                                    </div>
                                                    <div className="form-group row" id="macro_scheme_errors" />
                                                </div>
                                            </div>
                                        </div><button type="button" className="btn btn-sm btn-outline-secondary bottom_margin_small top_margin_small" data-toggle="collapse" data-target=".micro_nutrients" aria-expanded="false">Show Sodium/Cholesterol/Fiber Settings</button>
                                        <div className="micro_nutrients collapse">
                                            <div className="form-group small_top_spacer">
                                                <div className="row"><label className="col-form-label col-2">Sodium</label>
                                                    <div className="col-9 form_item_row"><label className="micro_label micro_checkbox_label"><span data-editors="watch_sodium" className="sodium_check"><input id="c1089_watch_sodium" name="watch_sodium" type="checkbox" /></span>Limit the amount of sodium in the meal plan?</label></div>
                                                </div>
                                                <div className="form_item_row"><label className="col-9 offset-2">Maximum of<span className="micro_nutrition_input" data-editors="sodium"><input id="c1089_sodium" className="form-control" name="sodium" step={50} type="number" disabled /></span>mg</label></div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row"><label className="col-form-label col-2">Cholesterol</label>
                                                    <div className="col-9 form_item_row"><label className="micro_label micro_checkbox_label"><span data-editors="watch_cholesterol" className="cholesterol_check"><input id="c1089_watch_cholesterol" name="watch_cholesterol" type="checkbox" /></span>Limit the amount of cholesterol in the meal plan?</label></div>
                                                </div>
                                                <div className="form_item_row"><label className="col-9 offset-2">Maximum of<span data-editors="cholesterol" className="micro_nutrition_input"><input id="c1089_cholesterol" className="form-control" name="cholesterol" step={10} type="number" disabled /></span>mg</label></div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row"><label className="col-form-label col-2">Fiber</label>
                                                    <div className="col-10 form_item_row"><label>Aim for at least<span data-editors="fiber" className="micro_nutrition_input"><input id="c1089_fiber" className="form-control" name="fiber" type="number" step="any" min={0} /></span>g</label></div>
                                                </div>
                                            </div>
                                            <div className="alert alert-info">
                                                <p>The generator gives less priority to micronutrients, so double check if they're met, especially if you have medical concerns.</p>
                                            </div>
                                        </div>
                                        <div id="deleted_nutrition_profile_warning" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer " ><a href="#" data-dismiss="modal" className="btn">Close</a><a href="#" className="btn btn-primary" id="nutrition_profile_save_changes">Save changes</a></div>
                </div>
