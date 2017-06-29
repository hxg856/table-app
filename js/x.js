    $(function () {
        $(".disp").blur(function () {
            if ($(this).val == "") {
                var text = $(this).attr('placeholder');
            } else {
                var text = $(this).val();
            }
            var $para = $("<p>" + text + "</p>");
            $(this).after($para);
            $(this).remove();
        });
        $(document).on("blur", ".disp", function () {
            var text = $(this).val();
            var $para = $("<p>" + text + "</p>");
            $(this).after($para);
            $(this).remove();
        });
        $("p").click(function () {
            var text1 = $(this).text();
            var $buttonText = $("<input type='text' placeholder='" + text1 + "' class='form-control disp small'>");
            $(this).after($buttonText);
            $(this).remove();
        });
        $(document).on("click", "p", function () {
            var text1 = $(this).text();
            var $buttonText = $("<input type='text' placeholder='" + text1 + "' class='form-control disp small'>");
            $(this).after($buttonText);
            $(this).remove();
        });
        $(".photos").change(function () {

            var objUrl = getObjectURL(this.files[0]);
            //alert("objUrl" + objUrl);
            if (objUrl) {
                $(this).next().next().attr("src", objUrl);
            }
            $(this).next().remove();
            $(this).remove();
            cc
        });
        $(document).on("change", ".photos", function () {
            var objUrl = getObjectURL(this.files[0]);
            //alert("objUrl" + objUrl);
            if (objUrl) {
                $(this).next().next().attr("src", objUrl);
            }
            $(this).next().remove();
            $(this).remove();
        });

        function getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        };

        $("#button").click(function () {
            var $td1 = $("<td><input class='form-control photos' type='file' id='myPhoto' name='myPhoto'><\/br><img src='' alt='' id='img0'><\/td>");
            var $td2 = $("<input type='text' placeholder='请在此输入表格标题' class='form-control disp'><input type='text' placeholder='请在此输入表格标题' class='form-control disp small'>");
            var $td3 = $("<td><input type='text' placeholder='请在此输入表格标题' class='form-control disp'></td>");
            var $td4 = $("<td><input type='text' placeholder='请在此输入表格标题' class='form-control disp'></td>");
            var $td5 = $("<td><input type='text' placeholder='请在此输入表格标题' class='form-control disp'></td>");
            var $tr = $("<tr><\/tr>");
            $tr.append($td1);
            $tr.append($td2);
            $tr.append($td3);
            $tr.append($td4);
            $tr.append($td5);
            $("tbody").append($tr);
        })
    })
