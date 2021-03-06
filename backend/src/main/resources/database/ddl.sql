-- create schemas
create table partners (
    id integer generated by default as identity,
    code_link varchar(14) not null,
    name varchar(60) not null,
    phone varchar(25) not null,
    photo_url varchar null,
    primary key (id)
);
create table buyers (
    id integer generated by default as identity,
    name varchar(60) not null,
    phone varchar(25) not null,
    email varchar null,
    document varchar null,
    primary key (id)
);
create table tickets (
    id integer generated by default as identity,
    number integer not null,
    status varchar(20) not null default ('disponível'),
    primary key (id)
);
create table reserves (
    id integer generated by default as identity,
    partner_id integer not null,
    buyer_id integer not null,
    created_at date not null,
    confirmed boolean not null default (false),
    primary key(id)
);
create table reserve_tickets (
    reserve_id integer not null,
    ticket_id integer not null
);

-- uniques
create unique index partners_code_link_uindex on partners (code_link);
create unique index partners_phone_uindex on partners (phone);

-- add fks
alter table if exists reserves add constraint fk01_reserves_partner foreign key (partner_id) references partners;
alter table if exists reserves add constraint fk02_reserves_buyer foreign key (buyer_id) references buyers;
alter table if exists reserve_tickets add constraint fk03_reserve_tickets_reserve foreign key (reserve_id) references reserves;
alter table if exists reserve_tickets add constraint fk04_reserve_tickets_ticket foreign key (ticket_id) references tickets;