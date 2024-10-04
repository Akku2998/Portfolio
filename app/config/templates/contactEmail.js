export const contactEmail = (message, name, email) => `<html>
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<table bgcolor="#fafafa" style=" width: 100%!important; height: 100%; background-color: #fafafa; padding: 20px; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, 'Lucida Grande', sans-serif;  font-size: 100%; line-height: 1.6;">
<tr>
<td></td>
<td bgcolor="#FFFFFF" style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block!important; max-width:600px!important; margin:0 auto!important; clear:both!important;"><div style="padding:20px; max-width:600px; margin:0 auto; display:block;">
<table style="width: 100%;">
<tr>
<td><p style="text-align: center; display: block;  padding-bottom:20px;  margin-bottom:20px; border-bottom:1px solid #dddddd;"><img src="https://i.postimg.cc/HsySGCwc/coding-1.png"/></p>
<h1 style="font-weight: 200; font-size: 36px; margin: 20px 0 30px 0; color: #333333;">INQUIRY</h1>
<p style="margin-bottom: 10px; font-weight: normal; font-size:16px; color: #333333;">${message}</p>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;">Name: ${name}</h2>
<h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;">Email: ${email} </h2>
<p style="text-align: center; display: block; padding-top:20px; font-weight: bold; margin-top:30px; color: #666666; border-top:1px solid #dddddd;">XYZ.com</p></td>
</tr>
</table>
</div></td>
<td></td>
</tr>
</table>
</body>
</html>`;
