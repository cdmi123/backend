var user  = require('../model/usermodel');
var jwt = require('jsonwebtoken');

exports.insert = async (req,res) => {

    try {
        
        var data = await user.create(req.body);

        res.status(200).json({
            status:"success",
            data
        })

    } catch (error) {

        res.status(200).json({
            error:error.message
        })
        
    }


}

exports.get_data = async (req,res) => {
    var page_no = req.query.pageno;
    
    if(page_no==undefined)
    {
        page_no=1;
    }

    var page_no = parseInt(page_no);

    console.log(page_no);
    

    var limit =3;

    var total_data = await user.countDocuments();
    var total_page = Math.ceil(total_data/limit);

    var start = (page_no-1)*limit;

    var data = await user.find().limit(limit).skip(start);


    res.status(200).json({
        status:"success",
        data,
        page_no,
        total_page
    })

}

exports.login = async (req,res) => {

    var data = await user.find({"email":req.body.email});

    if(data.length==1){

        if(data[0].password==req.body.password){

            var token = jwt.sign({id:data[0].id},"cdmi");

            res.status(200).json({
                status:"Login success",
                token
            })

        }
        else
        {

            res.status(200).json({
                status:"check your email and password"
            })

        }

    }
    else
    {

        res.status(200).json({
            status:"check your email and password"
        })

    }
}