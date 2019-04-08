#创建库
DROP DATABASE IF EXISTS bgl;
CREATE DATABASE bgl;

#用户列表
CREATE TABLE bgl_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(4),
    upwd VARCHAR(16),
    phone VARCHAR(11),
    genter BOOLEAN
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO bgl_user VALUES("null","花大爷","12345678","18899998888","0");
INSERT INTO bgl_user VALUES("null","毛毛","12345678","19988889999","1");
INSERT INTO bgl_user VALUES("null","沈以诚","12345678","16677778888","1");
INSERT INTO bgl_user VALUES("null","小黑","12345678","15566667777","0");
INSERT INTO bgl_user VALUES("null","赵小雷","12345678","13344445555","1");
INSERT INTO bgl_user VALUES("null","邵帅","12345678","15566667777","1");

#商品列表
CREATE TABLE bgl_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(255),
    img_url VARCHAR(255),
    price DECIMAL(10,2)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO bgl_product VALUES(null,'SERPENTI系列1','http://127.0.0.1:3000/imgs/product/productItem.png',999);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列2','http://127.0.0.1:3000/imgs/product/productItem.png',989);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列3','http://127.0.0.1:3000/imgs/product/productItem.png',979);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列4','http://127.0.0.1:3000/imgs/product/productItem.png',989);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列5','http://127.0.0.1:3000/imgs/product/productItem.png',989);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列6','http://127.0.0.1:3000/imgs/product/productItem.png',979);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列7','http://127.0.0.1:3000/imgs/product/productItem.png',959);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列8','http://127.0.0.1:3000/imgs/product/productItem.png',939);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列9','http://127.0.0.1:3000/imgs/product/productItem.png',939);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列10','http://127.0.0.1:3000/imgs/product/productItem.png',929);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列11','http://127.0.0.1:3000/imgs/product/productItem.png',969);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列12','http://127.0.0.1:3000/imgs/product/productItem.png',959);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列13','http://127.0.0.1:3000/imgs/product/productItem.png',939);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列14','http://127.0.0.1:3000/imgs/product/productItem.png',949);
INSERT INTO bgl_product VALUES(null,'SERPENTI系列15','http://127.0.0.1:3000/imgs/product/productItem.png',919);


#详情
CREATE TABLE bgl_details(
   pid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(128),
   price DECIMAL(10,2),
   checked INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO bgl_details VALUES(NULL,'戒指 - B.zero1系列 AN858666 | 宝格丽',999,20);

#商品图片列表
CREATE TABLE bgl_products_pics(
   pid INT PRIMARY KEY AUTO_INCREMENT,
   products_id INT,
   sm VARCHAR(128),
   md VARCHAR(128),
   lg VARCHAR(128)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO bgl_products_pics VALUES(NULL,1,'http://127.0.0.1:3000/imgs/productDetails/details1-sm.png','http://127.0.0.1:3000/imgs/productDetails/details1-md.png','http://127.0.0.1:3000/imgs/productDetails/details1-lg.png');
INSERT INTO bgl_products_pics VALUES(NULL,1,'http://127.0.0.1:3000/imgs/productDetails/details2-sm.png','http://127.0.0.1:3000/imgs/productDetails/details2-md.png','http://127.0.0.1:3000/imgs/productDetails/details2-lg.png');
INSERT INTO bgl_products_pics VALUES(NULL,1,'http://127.0.0.1:3000/imgs/productDetails/details3-sm.png','http://127.0.0.1:3000/imgs/productDetails/details3-md.png','http://127.0.0.1:3000/imgs/productDetails/details3-lg.png');


#购物车
CREATE TABLE bgl_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  product_id INT,
  count INT,    
  is_checked BOOLEAN
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
