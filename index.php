<?php

?>
<!DOCTYPE html>
<html>

<head>
    <title>Tile Calculator</title>
    <link href="stylesheet.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="form-group col-sm-10" style="display: inline-block;">
                <div class="radio">
                    <label><input type="radio" name="measure_units" value="metres" checked="checked" />
                        Metres</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="measure_units" value="feet_inches" />
                        Feets Inches</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="measure_units" value="inches" />
                        Inches</label>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="measure col-md-12 table-responsive" id="measure-metres">
                <table class="table table-bordered table-hover table-sortable" id="tab_logic">
                    <thead>
                        <tr>
                            <th class="text-center">
                                Width
                            </th>
                            <th class="text-center">
                                Length
                            </th>
                            <th class="text-center">
                                Area
                            </th>
                            <th class="text-center" style="border-top: 1px solid #ffffff; border-right: 1px solid #ffffff;">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='addr0' data-id="0" class="hidden">
                            <td data-name="width">
                                <input type="number" min="0" name='width0' placeholder='Width' class="width form-control" />
                            </td>
                            <td data-name="length">
                                <input type="number" min="0" name='length0' placeholder='Length' class="length form-control" />
                            </td>

                            <td data-name="area">
                                <input type="number" min="0" disabled="true" name='area0' class="area form-control" />
                            </td>

                            <td data-name="del">
                                <button name="del0" class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <p>Total: <strong id="totalArea"></strong></p>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="measure col-md-12 table-responsive" id="measure-feet_inches">
                <table class="table table-bordered table-hover table-sortable" id="tab_logic">
                    <thead>
                        <tr>
                            <th class="text-center">
                                Width
                            </th>
                            <th class="text-center">
                                Length
                            </th>
                            <th class="text-center">
                                Area
                            </th>
                            <th class="text-center" style="border-top: 1px solid #ffffff; border-right: 1px solid #ffffff;">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='addr0' data-id="0" class="hidden">
                            <td data-name="width">
                                <input type="number" min="0" name='width0' placeholder='Width' class="width form-control" />
                            </td>
                            <td data-name="length">
                                <input type="number" min="0" name='length0' placeholder='Length' class="length form-control" />
                            </td>

                            <td data-name="area">
                                <input type="number" min="0" disabled="true" name='area0' class="area form-control" />
                            </td>

                            <td data-name="del">
                                <button name="del0" class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <p>Total: <strong id="totalArea"></strong></p>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="measure col-md-12 table-responsive" id="measure-inches">
                <table class="table table-bordered table-hover" id="tab_logic">
                    <thead>
                        <tr>
                            <th class="text-center">
                                Width
                            </th>
                            <th class="text-center">
                                Length
                            </th>
                            <th class="text-center">
                                Area
                            </th>
                            <th class="text-center" style="border-top: 1px solid #ffffff; border-right: 1px solid #ffffff;">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='addr0' data-id="0" class="hidden">
                            <td data-name="width">
                                <input type="number" min="0" name='width0' placeholder='Width' class="width form-control" />
                            </td>
                            <td data-name="length">
                                <input type="number" min="0" name='length0' placeholder='Length' class="length form-control" />
                            </td>

                            <td data-name="area">
                                <input type="number" min="0" disabled="true" name='area0' class="area form-control" />
                            </td>

                            <td data-name="del">
                                <button name="del0" class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <p>Total: <strong id="totalArea"></strong></p>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <a id="add_row" class="btn btn-primary float-right">Add Row</a>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>

</html>