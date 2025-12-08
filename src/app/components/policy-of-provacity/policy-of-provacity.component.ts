import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policy-of-provacity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy-of-provacity.component.html',
  styleUrl: './policy-of-provacity.component.css'
})

export class PolicyOfProvacityComponent {
  lastUpdate: string = 'Diciembre 2024';
  appName: string = 'Radio Rey Jesus Cieneguilla';
  contactEmail: string = 'contacto@turadio.com';

  sections = [
    {
      title: 'Información General',
      content: `Esta Política de Privacidad describe cómo ${this.appName} maneja la información cuando utilizas nuestra aplicación móvil de streaming de radio.`
    },
    {
      title: 'Recopilación de Datos',
      content: `${this.appName} NO recopila, almacena ni comparte datos personales de los usuarios. Nuestra aplicación funciona de manera completamente anónima y no requiere registro, inicio de sesión ni permisos especiales.`,
      subsections: [
        'No recopilamos información personal identificable',
        'No solicitamos acceso a la ubicación del dispositivo',
        'No recopilamos datos de contactos',
        'No utilizamos cookies de seguimiento',
        'No accedemos a la cámara ni al micrófono'
      ]
    },
    {
      title: 'Funcionalidades de la App',
      content: 'Nuestra aplicación ofrece las siguientes funcionalidades sin recopilar datos:',
      subsections: [
        'Streaming de radio en vivo',
        'Versículo diario',
        'Información sobre programas',
        'Sección "Acerca de"',
        'Contenido de descubrimiento'
      ]
    },
    {
      title: 'Uso de Internet',
      content: 'La aplicación requiere conexión a Internet únicamente para transmitir el contenido de audio en tiempo real. No se almacena información sobre tu uso o preferencias.'
    },
    {
      title: 'Datos Técnicos Automáticos',
      content: 'Es posible que servicios de terceros integrados en la plataforma Android (como Google Play Services) recopilen datos técnicos básicos del dispositivo. Estos datos no son controlados por nuestra aplicación y están sujetos a las políticas de privacidad de Google.'
    },
    {
      title: 'Publicidad',
      content: 'Esta aplicación NO contiene anuncios de terceros ni SDKs de publicidad.' // Cambia esto si tu app tiene anuncios
    },
    {
      title: 'Seguridad',
      content: 'Aunque no recopilamos datos personales, nos comprometemos a mantener la seguridad de nuestra aplicación mediante actualizaciones regulares y siguiendo las mejores prácticas de desarrollo.'
    },
    {
      title: 'Cambios en la Política',
      content: 'Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.'
    },
    {
      title: 'Contacto',
      content: `Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en: ${this.contactEmail}`
    }
  ];
}