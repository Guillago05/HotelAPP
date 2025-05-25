-- Insertar los roles
insert into roles(id, name) values (1, 'ROLE_USER');
insert into roles(id, name) values (2, 'ROLE_HOTEL');

-- Rellenando la base de datos - Hoteles en Madrid

-- Hotel 1 (ID: 3)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (3, 2, 'hotel_plaza_mayor_madrid@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (3, 8, 'Madrid', 'Calle Mayor 10, 28013', 'Hotel Plaza Mayor Madrid', 'Encantador hotel boutique situado a pocos pasos de la historica Plaza Mayor de Madrid. Ofrece habitaciones comodas y un ambiente acogedor.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 120, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 95, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 150, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 180, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 125, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 125, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 1, 100, 3);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (402, 4, 175, 3);

-- Hotel 2 (ID: 4)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (4, 2, 'hotel_gran_via_central@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (4, 10, 'Madrid', 'Gran Via 25, 28013', 'Hotel Gran Via Central', 'Moderno hotel ubicado en la emblematica Gran Via de Madrid. Perfecto para compras, teatros y turismo. Dispone de habitaciones insonorizadas.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 140, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 3, 170, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 1, 110, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 200, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 145, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 145, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 3, 175, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 1, 115, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (9, 4, 195, 4);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 150, 4);

-- Hotel 3 (ID: 5)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (5, 2, 'hotel_retiro_suites@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (5, 6, 'Madrid', 'Calle Alfonso XII 5, 28014', 'Hotel Retiro Suites', 'Elegancia y confort junto al Parque del Retiro. Ideal para disfrutar de la naturaleza en medio de la ciudad. Suites amplias y luminosas.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 160, 5);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 3, 190, 5);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 4, 220, 5);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 165, 5);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 1, 130, 5);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 3, 195, 5);

-- Hotel 4 (ID: 6)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (6, 2, 'hotel_sol_boutique@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (6, 5, 'Madrid', 'Carrera de San Jeronimo 8, 28014', 'Hotel Sol Boutique', 'Pequenio hotel con encanto en pleno centro, junto a la Puerta del Sol. Disenio cuidado y atencion personalizada.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 1, 90, 6);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 2, 110, 6);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 2, 115, 6);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 3, 140, 6);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 4, 160, 6);

-- Hotel 5 (ID: 7)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (7, 2, 'hotel_atocha_connect@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (7, 9, 'Madrid', 'Paseo de la Infanta Isabel 15, 28014', 'Hotel Atocha Connect', 'Ubicacion estrategica frente a la estacion de Atocha. Perfecto para viajeros de negocios y turistas. Conexion Wi-Fi de alta velocidad gratuita.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 130, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 100, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (103, 3, 160, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 4, 190, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 2, 135, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (203, 2, 135, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 3, 165, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 1, 105, 7);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (303, 4, 185, 7);

-- Hotel 6 (ID: 8)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (8, 2, 'hotel_malasana_urban@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (8, 7, 'Madrid', 'Corredera Baja de San Pablo 20, 28004', 'Hotel Malasania Urban', 'Vive el ambiente alternativo del barrio de Malasania en este hotel de disenio moderno y funcional. Cerca de bares, tiendas y vida nocturna.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 115, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 85, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 145, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 170, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 120, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 120, 8);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 3, 150, 8);

-- Rellenando la base de datos - Hoteles en Barcelona (sin tildes, ni en lugar de n)

-- Hotel 7 (ID: 9)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (9, 2, 'hotel_ramblas_bcn@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (9, 9, 'Barcelona', 'La Rambla 50, 08002', 'Hotel Ramblas Center', 'Hotel vibrante en el corazon de Las Ramblas. Ideal para experimentar la vida de Barcelona. Habitaciones comodas y modernas.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 150, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 120, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (103, 3, 180, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 4, 210, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 2, 155, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (203, 2, 155, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 3, 185, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 1, 125, 9);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (303, 4, 205, 9);

-- Hotel 8 (ID: 10)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (10, 2, 'hotel_gotico_charme@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (10, 7, 'Barcelona', 'Carrer del Bisbe 5, 08002', 'Hotel Gotico Charme', 'Alojamiento con encanto en un edificio historico del Barrio Gotico. A pocos pasos de la Catedral de Barcelona.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 160, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 3, 190, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 1, 130, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 220, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 165, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 165, 10);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 3, 195, 10);

-- Hotel 9 (ID: 11)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (11, 2, 'hotel_sagrada_vista@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (11, 10, 'Barcelona', 'Carrer de Provenca 480, 08025', 'Hotel Sagrada Vista', 'Disfruta de vistas espectaculares a la Sagrada Familia desde algunas de nuestras habitaciones. Disenio moderno y funcional.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 170, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 1, 140, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 200, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (13, 4, 230, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 175, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 2, 175, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 1, 145, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (23, 3, 205, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (30, 4, 225, 11);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (31, 2, 180, 11);

-- Hotel 10 (ID: 12)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (12, 2, 'hotel_eixample_confort@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (12, 5, 'Barcelona', 'Passeig de Gracia 90, 08008', 'Hotel Eixample Confort', 'Elegante hotel boutique en el corazon del Eixample, cerca de las tiendas de lujo de Passeig de Gracia y de la Casa Batllo.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (501, 2, 180, 12);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (502, 1, 150, 12);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (601, 3, 210, 12);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (602, 4, 240, 12);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (701, 2, 185, 12);

-- Hotel 11 (ID: 13)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (13, 2, 'hotel_park_guell_garden@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (13, 6, 'Barcelona', 'Carrer de Marianao 20, 08017', 'Hotel Park Guell Garden', 'Tranquilo hotel con jardin situado cerca del famoso Park Guell de Gaudi. Ideal para una estancia relajada.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 1, 110, 13);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 2, 140, 13);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 170, 13);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 2, 145, 13);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 4, 190, 13);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 150, 13);

-- Hotel 12 (ID: 14)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (14, 2, 'hotel_barceloneta_beach@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (14, 8, 'Barcelona', 'Passeig Maritim de la Barceloneta 30, 08003', 'Hotel Barceloneta Beach', 'Moderno hotel situado en primera linea de la playa de la Barceloneta. Disfruta del sol y el mar Mediterraneo.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 190, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 1, 160, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 220, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 4, 250, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 2, 195, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 2, 195, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (30, 3, 225, 14);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (31, 4, 245, 14);

-- Rellenando la base de datos - Hoteles en Valencia (sin tildes, ni en lugar de n)

-- Hotel 13 (ID: 15)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (15, 2, 'hotel_ciudad_artes_vlc@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (15, 8, 'Valencia', 'Avenida Profesor Lopez Piniero 7, 46013', 'Hotel Ciudad Artes VLC', 'Moderno hotel junto a la impresionante Ciudad de las Artes y las Ciencias. Ideal para visitas culturales y eventos.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 130, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 100, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 160, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 190, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 135, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 135, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 1, 105, 15);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (402, 4, 185, 15);

-- Hotel 14 (ID: 16)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (16, 2, 'hotel_centro_historico_vlc@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (16, 6, 'Valencia', 'Carrer dels Cavallers 15, 46001', 'Hotel Centro Historico VLC', 'Alojamiento con encanto en el corazon del casco antiguo de Valencia, cerca de la Lonja de la Seda y el Mercado Central.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 120, 16);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 3, 150, 16);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 1, 95, 16);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 175, 16);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 125, 16);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 125, 16);

-- Hotel 15 (ID: 17)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (17, 2, 'hotel_malvarrosa_playa@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (17, 9, 'Valencia', 'Passeig de Neptu 30, 46011', 'Hotel Malvarrosa Playa', 'Disfruta de la brisa marina en nuestro hotel situado frente a la famosa playa de la Malvarrosa. Habitaciones con vistas al mar disponibles.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 140, 17);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 1, 110, 17);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 170, 17);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (13, 4, 200, 17);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 145, 17); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 2, 145, 17); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 1, 115, 17);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (23, 3, 175, 17); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (30, 4, 195, 17);

-- Hotel 16 (ID: 18)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (18, 2, 'hotel_ruzafa_design@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (18, 5, 'Valencia', 'Carrer de Sueca 45, 46006', 'Hotel Ruzafa Design', 'Hotel boutique en el animado barrio de Ruzafa, conocido por sus bares, restaurantes y ambiente bohemio.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 1, 90, 18);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 2, 115, 18);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 140, 18);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 2, 120, 18);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 4, 165, 18);

-- Hotel 17 (ID: 19)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (19, 2, 'hotel_colon_market_vlc@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (19, 7, 'Valencia', 'Carrer de Ciril Amoros 80, 46004', 'Hotel Colon Market VLC', 'Elegancia y comodidad cerca del Mercado de Colon y la zona comercial de Valencia. Perfecto para compras y gastronomia.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 135, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 105, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 165, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 195, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 140, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 140, 19);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 110, 19);

-- Rellenando la base de datos - Hoteles en Sevilla (sin tildes, ni en lugar de n)

-- Hotel 18 (ID: 20)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (20, 2, 'hotel_giralda_centro_svq@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (20, 7, 'Sevilla', 'Calle Mateos Gago 10, 41004', 'Hotel Giralda Centro SVQ', 'Ubicacion privilegiada a pocos metros de la Giralda y la Catedral de Sevilla. Disfrute del encanto del centro historico.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 125, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 95, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 155, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 180, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 130, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 130, 20);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 3, 160, 20);

-- Hotel 19 (ID: 21)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (21, 2, 'hotel_triana_rio_svq@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (21, 5, 'Sevilla', 'Calle Betis 50, 41010', 'Hotel Triana Rio SVQ', 'Viva la autenticidad del barrio de Triana en este hotel con vistas al rio Guadalquivir y al centro de Sevilla.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 1, 100, 21);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 2, 135, 21);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 165, 21);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 2, 140, 21); -- Con vistas
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 4, 190, 21);

-- Hotel 20 (ID: 22)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (22, 2, 'hotel_santa_cruz_boutique_svq@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (22, 9, 'Sevilla', 'Calle Cruces 8, 41004', 'Hotel Santa Cruz Boutique SVQ', 'Hotel boutique en el corazon del pintoresco Barrio de Santa Cruz. Patios andaluces y ambiente tranquilo.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 140, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 1, 110, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 170, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (13, 4, 200, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 145, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 2, 145, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 1, 115, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (23, 3, 175, 22);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (30, 4, 195, 22);

-- Hotel 21 (ID: 23)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (23, 2, 'hotel_plaza_espania_svq@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (23, 6, 'Sevilla', 'Avenida de Maria Luisa s/n, 41013', 'Hotel Plaza Espania SVQ', 'Elegante hotel situado junto al Parque de Maria Luisa y la emblematica Plaza de Espania.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 150, 23);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 3, 180, 23);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 1, 120, 23);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 210, 23);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 155, 23);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 155, 23);

-- Hotel 22 (ID: 24)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (24, 2, 'hotel_nervion_modern_svq@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (24, 8, 'Sevilla', 'Avenida Luis de Morales 5, 41018', 'Hotel Nervion Modern SVQ', 'Hotel moderno y funcional en el distrito de Nervion, cerca del estadio Sanchez-Pizjuan y centros comerciales.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 110, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 85, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 140, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 165, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 115, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 115, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 3, 145, 24);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 1, 90, 24);

-- Rellenando la base de datos - Hoteles en A Coruña

-- Hotel 23 (ID: 25) - Corregido nombre ciudad
-- Login ya insertado previamente
UPDATE hoteles SET ciudad = 'A Coruña' WHERE id = 25;
-- Habitaciones ya insertadas previamente

-- Hotel 24 (ID: 26) - Completado y corregido nombre ciudad
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (26, 2, 'hotel_torre_hercules_view@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (26, 8, 'A Coruña', 'Ronda de Monte Alto 5, 15002', 'Hotel Torre Hércules View', 'Hotel con impresionantes vistas a la Torre de Hércules, Patrimonio de la Humanidad. Cerca del paseo marítimo.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 130, 26); -- Vista Torre
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 105, 26);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 155, 26);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 180, 26); -- Vista Torre
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 135, 26); -- Vista Torre
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 125, 26);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 100, 26);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 3, 160, 26);

-- Hotel 25 (ID: 27)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (27, 2, 'hotel_plaza_maria_pita_coruna@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (27, 5, 'A Coruña', 'Praza de María Pita 10, 15001', 'Hotel Plaza María Pita Coruña', 'Ubicado en la icónica Plaza de María Pita, centro neurálgico de la ciudad. Edificio histórico con comodidades modernas.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 2, 140, 27); -- Vista Plaza
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 1, 110, 27);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 3, 165, 27); -- Vista Plaza
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 4, 190, 27);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 2, 135, 27);

-- Hotel 26 (ID: 28)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (28, 2, 'hotel_riazor_beach_coruna@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (28, 9, 'A Coruña', 'Paseo Marítimo Alcalde Francisco Vázquez 20, 15002', 'Hotel Riazor Beach Coruña', 'Situado en primera línea de la playa de Riazor. Ideal para disfrutar del mar y de la ciudad. Cerca del estadio.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 125, 28); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 95, 28);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 150, 28); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 175, 28);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 130, 28); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 120, 28);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 100, 28);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 3, 155, 28); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (9, 4, 170, 28);

-- Rellenando la base de datos - Hoteles en Valladolid

-- Hotel 27 (ID: 29)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (29, 2, 'hotel_centro_valladolid@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (29, 7, 'Valladolid', 'Calle Santiago 15, 47001', 'Hotel Centro Valladolid', 'Hotel céntrico situado en la principal calle comercial de Valladolid, a pocos pasos de la Plaza Mayor y la Catedral.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 95, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 75, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 115, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 135, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 100, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 100, 29);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 1, 80, 29);

-- Hotel 28 (ID: 30)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (30, 2, 'hotel_plaza_mayor_valladolid@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (30, 5, 'Valladolid', 'Calle Pasión 5, 47001', 'Hotel Plaza Mayor Valladolid', 'Pequeño hotel con encanto junto a la histórica Plaza Mayor de Valladolid. Ambiente familiar y acogedor.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 1, 70, 30);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 2, 90, 30);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 110, 30);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 2, 95, 30);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 4, 125, 30);

-- Hotel 29 (ID: 31)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (31, 2, 'hotel_campo_grande_valladolid@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (31, 9, 'Valladolid', 'Acera de Recoletos 10, 47004', 'Hotel Campo Grande Valladolid', 'Moderno hotel situado frente al parque Campo Grande, cerca de la estación de tren. Ideal para negocios y turismo.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 2, 105, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 1, 85, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 125, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (13, 4, 145, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 110, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 2, 110, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (22, 1, 90, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (23, 3, 130, 31);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (30, 4, 140, 31);

-- Hotel 30 (ID: 32)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (32, 2, 'hotel_ribera_pisuerga_valladolid@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (32, 6, 'Valladolid', 'Avenida de Salamanca 50, 47014', 'Hotel Ribera Pisuerga Valladolid', 'Tranquilo hotel junto al río Pisuerga, con fáciles accesos y aparcamiento. Dispone de amplias habitaciones.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 90, 32);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 3, 110, 32);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 1, 70, 32);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 130, 32);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 95, 32);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 95, 32);

-- Rellenando la base de datos - Hoteles en Orense

-- Hotel 31 (ID: 33)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (33, 2, 'hotel_termas_orense@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (33, 6, 'Orense', 'Rúa Burgas 10, 32005', 'Hotel Termas Orense', 'Hotel céntrico junto a las famosas Burgas de Orense. Ideal para disfrutar de las aguas termales y el casco histórico.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 85, 33);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 65, 33);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 105, 33);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 125, 33);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 90, 33);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 90, 33);

-- Hotel 32 (ID: 34)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (34, 2, 'hotel_ponte_vella_orense@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (34, 8, 'Orense', 'Rúa Ribeira de Canedo 5, 32001', 'Hotel Ponte Vella Orense', 'Hotel con vistas al río Miño y al Puente Romano (Ponte Vella). Ambiente tranquilo y moderno.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 95, 34); -- Vista Río
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 75, 34);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 115, 34); -- Vista Río
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 135, 34);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 100, 34); -- Vista Río
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 90, 34);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 70, 34);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 3, 120, 34);

-- Hotel 33 (ID: 35)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (35, 2, 'hotel_san_martino_orense@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (35, 5, 'Orense', 'Praza do Correxidor 2, 32004', 'Hotel San Martiño Orense', 'Acogedor hotel situado cerca de la Catedral de San Martiño y la Plaza Mayor. Perfecto para explorar el centro.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 1, 60, 35);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 2, 80, 35);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 3, 100, 35);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 85, 35);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 4, 115, 35);

-- Hotel 34 (ID: 36)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (36, 2, 'hotel_progreso_centro_orense@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (36, 9, 'Orense', 'Rúa do Progreso 80, 32003', 'Hotel Progreso Centro Orense', 'Hotel funcional en la principal arteria comercial de Orense. Bien comunicado y práctico para visitas.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 80, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 60, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 100, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 120, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 85, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 85, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 65, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 3, 105, 36);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (9, 4, 115, 36);

-- Rellenando la base de datos - Hoteles en Santander

-- Hotel 35 (ID: 37)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (37, 2, 'hotel_bahia_santander@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (37, 7, 'Santander', 'Paseo de Pereda 20, 39004', 'Hotel Bahía Santander', 'Emblemático hotel con vistas a la Bahía de Santander. Ubicación céntrica inmejorable, cerca del Centro Botín.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 140, 37); -- Vista Bahía
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 1, 110, 37);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 3, 170, 37); -- Vista Bahía
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 195, 37);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 145, 37); -- Vista Bahía
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 135, 37);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (401, 1, 115, 37);

-- Hotel 36 (ID: 38)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (38, 2, 'hotel_sardinero_playa_santander@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (38, 9, 'Santander', 'Plaza de Italia 1, 39005', 'Hotel Sardinero Playa Santander', 'Situado en primera línea de la famosa playa de El Sardinero. Ideal para disfrutar del mar y el Gran Casino.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (1, 2, 150, 38); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (2, 1, 120, 38);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (3, 3, 180, 38); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (4, 4, 210, 38);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (5, 2, 155, 38); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (6, 2, 145, 38);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (7, 1, 125, 38);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (8, 3, 185, 38); -- Vista Mar
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (9, 4, 205, 38);

-- Hotel 37 (ID: 39)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (39, 2, 'hotel_centro_boutique_santander@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (39, 5, 'Santander', 'Calle Lealtad 5, 39002', 'Hotel Centro Boutique Santander', 'Pequeño hotel boutique con encanto en el centro de Santander. Diseño cuidado y atención personalizada.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (10, 1, 95, 39);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (11, 2, 125, 39);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (12, 3, 150, 39);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (20, 2, 130, 39);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (21, 4, 170, 39);

-- Hotel 38 (ID: 40)
INSERT INTO login (id, rol_id, email, contrasenia) VALUES (40, 2, 'hotel_palacio_festivales_santander@example.com', 'password123');
INSERT INTO hoteles (id, total_habitaciones, ciudad, direccion, nombre, descripcion) VALUES (40, 6, 'Santander', 'Calle Gamazo 12, 39004', 'Hotel Palacio Festivales Santander', 'Moderno hotel junto al Palacio de Festivales de Cantabria y Puerto Chico. Buena conexión y servicios.');
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (101, 2, 115, 40);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (102, 3, 140, 40);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (201, 1, 90, 40);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (202, 4, 160, 40);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (301, 2, 120, 40);
INSERT INTO habitaciones (numero, personas, precio_noche, hotel_id) VALUES (302, 2, 120, 40);

-- Imagenes
-- INSERT INTO imagenes(hotel_id,ruta) VALUES (,'');
INSERT INTO imagenes(hotel_id,ruta) VALUES (3,'/images/casas-pintorescas-plaza-mayor-madrid_1398-2689.avif');
INSERT INTO imagenes(hotel_id,ruta) VALUES (3,'/images/istockphoto-678934868-612x612.jpg');
INSERT INTO imagenes(hotel_id,ruta) VALUES (4,'/images/gran-via-noche.jpeg');
