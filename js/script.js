// ---------------------- MENU HAMBURGUESA ----------------------
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// ---------------------- WHATSAPP DINÁMICO ----------------------
const numero = "5493518632045"; 
const whatsappBotones = document.querySelectorAll(".btn-whatsapp");

function actualizarWhatsapp(mensaje) {
  whatsappBotones.forEach(boton => {
    boton.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  });
}

// ---------------------- MULTI-IDIOMA ----------------------

// Traducciones (se pueden cargar desde lang/*.json si querés luego)
//const traducciones = {
  es: {
    heroTitulo: "Bienvenido a Inmigración Argentina",
    heroTexto: "Te acompañamos en todo el proceso migratorio con orientación clara, humana y personalizada.",
    btnServicios: "Ver Servicios",
    btnRequisitos: "Revisar Requisitos",
    quienesSomosTitulo: "Quiénes Somos",
    quienesSomosTexto: "Somos un equipo especializado en trámites migratorios.",
    misionTexto: "Nuestra misión es brindar soluciones confiables y humanas.",
    visionTexto: "Ser referentes en asistencia migratoria.",
    serviciosTitulo: "Nuestros Servicios",
    serv1Titulo: "Residencias",
    serv1Texto: "Tramitamos tu residencia permanente o temporaria.",
    serv2Titulo: "Ciudadanía",
    serv2Texto: "Te acompañamos en el proceso de ciudadanía argentina.",
    serv3Titulo: "Documentos",
    serv3Texto: "Gestionamos DNI, pasaportes y otros trámites.",
    btnVerTodos: "Ver todos los servicios",
    reqTitulo: "Requisitos Generales",
    reqIntro: "Estos son los documentos más solicitados:",
    req1: "Pasaporte vigente",
    req2: "Certificado de antecedentes penales",
    req3: "Acta de nacimiento apostillada",
    req4: "Comprobante de domicilio",
    contactoTitulo: "Contáctanos",
    contactoTexto: "Escribinos para recibir asesoramiento personalizado.",
    menu: ["Inicio", "Servicios", "Requisitos", "Nosotros", "Preguntas", "Contacto"],
    whatsappMensaje: "Hola, quiero consultar sobre inmigración"
  },
  en: {
    heroTitulo: "Welcome to Immigration Argentina",
    heroTexto: "We accompany you throughout the migration process with clear, human, and personalized guidance.",
    btnServicios: "View Services",
    btnRequisitos: "Check Requirements",
    quienesSomosTitulo: "About Us",
    quienesSomosTexto: "We are a team specialized in migration procedures.",
    misionTexto: "Our mission is to provide reliable and human solutions.",
    visionTexto: "To be leaders in migration assistance.",
    serviciosTitulo: "Our Services",
    serv1Titulo: "Residences",
    serv1Texto: "We process your permanent or temporary residence.",
    serv2Titulo: "Citizenship",
    serv2Texto: "We guide you through the citizenship process.",
    serv3Titulo: "Documents",
    serv3Texto: "We manage ID cards, passports and other paperwork.",
    btnVerTodos: "See all services",
    reqTitulo: "General Requirements",
    reqIntro: "These are the most common documents:",
    req1: "Valid passport",
    req2: "Criminal record certificate",
    req3: "Apostilled birth certificate",
    req4: "Proof of address",
    contactoTitulo: "Contact Us",
    contactoTexto: "Write to us for personalized assistance.",
    menu: ["Home", "Services", "Requirements", "About Us", "FAQ", "Contact"],
    whatsappMensaje: "Hello, I’d like to inquire about immigration"
  }
};

// Cambia el idioma y aplica traducciones
function cambiarIdioma(idioma) {
  const t = traducciones[idioma];
  if (!t) return;

  // HERO
  if (document.getElementById("hero-titulo"))
    document.getElementById("hero-titulo").textContent = t.heroTitulo;
  if (document.getElementById("hero-texto"))
    document.getElementById("hero-texto").textContent = t.heroTexto;
  if (document.getElementById("btn-servicios"))
    document.getElementById("btn-servicios").textContent = t.btnServicios;
  if (document.getElementById("btn-requisitos"))
    document.getElementById("btn-requisitos").textContent = t.btnRequisitos;

  // QUIÉNES SOMOS
  if (document.getElementById("quienes-somos-titulo"))
    document.getElementById("quienes-somos-titulo").textContent = t.quienesSomosTitulo;
  if (document.getElementById("quienes-somos-texto"))
    document.getElementById("quienes-somos-texto").textContent = t.quienesSomosTexto;
  if (document.getElementById("mision-texto"))
    document.getElementById("mision-texto").textContent = t.misionTexto;
  if (document.getElementById("vision-texto"))
    document.getElementById("vision-texto").textContent = t.visionTexto;

  // SERVICIOS
  if (document.getElementById("servicios-titulo"))
    document.getElementById("servicios-titulo").textContent = t.serviciosTitulo;
  if (document.getElementById("serv1-titulo"))
    document.getElementById("serv1-titulo").textContent = t.serv1Titulo;
  if (document.getElementById("serv1-texto"))
    document.getElementById("serv1-texto").textContent = t.serv1Texto;
  if (document.getElementById("serv2-titulo"))
    document.getElementById("serv2-titulo").textContent = t.serv2Titulo;
  if (document.getElementById("serv2-texto"))
    document.getElementById("serv2-texto").textContent = t.serv2Texto;
  if (document.getElementById("serv3-titulo"))
    document.getElementById("serv3-titulo").textContent = t.serv3Titulo;
  if (document.getElementById("serv3-texto"))
    document.getElementById("serv3-texto").textContent = t.serv3Texto;
  if (document.getElementById("btn-ver-todos"))
    document.getElementById("btn-ver-todos").textContent = t.btnVerTodos;

  // REQUISITOS
  if (document.getElementById("req-titulo"))
    document.getElementById("req-titulo").textContent = t.reqTitulo;
  if (document.getElementById("req-intro"))
    document.getElementById("req-intro").textContent = t.reqIntro;
  if (document.getElementById("req1"))
    document.getElementById("req1").textContent = t.req1;
  if (document.getElementById("req2"))
    document.getElementById("req2").textContent = t.req2;
  if (document.getElementById("req3"))
    document.getElementById("req3").textContent = t.req3;
  if (document.getElementById("req4"))
    document.getElementById("req4").textContent = t.req4;

  // CONTACTO
  if (document.getElementById("contacto-titulo"))
    document.getElementById("contacto-titulo").textContent = t.contactoTitulo;
  if (document.getElementById("contacto-texto"))
    document.getElementById("contacto-texto").textContent = t.contactoTexto;

  // MENÚ
  const idsMenu = ["menu-inicio", "menu-servicios", "menu-requisitos", "menu-nosotros", "menu-preguntas", "menu-contacto"];
  idsMenu.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && t.menu[i]) el.textContent = t.menu[i];
  });

  // WHATSAPP
  actualizarWhatsapp(t.whatsappMensaje);

  // Guardar idioma
  localStorage.setItem("idiomaSeleccionado", idioma);
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idiomaSeleccionado") || "es";
  cambiarIdioma(idiomaGuardado);
});
