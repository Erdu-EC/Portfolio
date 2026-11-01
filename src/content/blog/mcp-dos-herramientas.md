---
title: "Por qué mis MCP Servers exponen solo dos herramientas"
description: "Una decisión de diseño intencional: menos es más al exponer herramientas MCP para bases de datos. Los beneficios de la simplicidad en la integración con IA."
pubDate: 2026-11-01
tags:
  - MCP
  - C#
  - .NET
  - PostgreSQL
  - SQL Server
  - AI Integration
  - Diseño de Software
draft: false
---

## Introducción

Al desarrollar servidores MCP (Model Context Protocol) para [PostgreSQL](https://github.com/Erdu-EC/PostgresMcpServer) y [SQL Server](https://github.com/Erdu-EC/SQLServer-MCP), tomé una decisión de diseño que puede parecer contraintuitiva: **exponer solo dos herramientas**.

En un mundo donde la tendencia es ofrecer cada vez más funcionalidad, ¿por qué limitarse a dos?

> La respuesta corta es: **menos es más**.

## Las dos herramientas

Ambos servidores exponen exactamente dos herramientas MCP:

| Herramienta | Operaciones | Descripción |
|---|---|---|
| **Ejecutar consulta de lectura** | `SELECT` | Lee datos de la base de datos de forma segura |
| **Ejecutar consulta de escritura** | `INSERT`, `UPDATE`, `DELETE` | Modifica datos cuando es necesario |

No hay herramientas para listar tablas, describir esquemas, crear índices o gestionar conexiones. Solo leer y escribir.

### ¿Qué significa en la práctica?

Cuando un modelo de IA quiere conocer el esquema de una tabla, en lugar de llamar a una herramienta `describeTable`, simplemente ejecuta SQL:

```sql
-- Listar todas las tablas
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';

-- Obtener el esquema de una tabla
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'users';
```

El lenguaje SQL ya es lo suficientemente expresivo. No necesitas una herramienta por cada operación.

## ¿Por qué solo dos?

### 1. Claridad para el modelo de IA

Los LLMs funcionan mejor cuando el espacio de decisiones es pequeño y bien definido. Con dos herramientas, el modelo decide rápidamente qué acción tomar sin perderse en un catálogo de opciones.

Cada herramienta adicional aumenta:

- La **carga cognitiva** del modelo al interpretar las descripciones.
- La **probabilidad** de que elija la herramienta incorrecta.
- El **tiempo de respuesta** por el contexto extra que debe procesar.

### 2. Separación de responsabilidades

Leer y escribir son operaciones fundamentalmente diferentes con distintos perfiles de riesgo. Al separarlas en herramientas distintas:

- Se hace explícito el **nivel de riesgo** de cada operación.
- Se pueden aplicar **políticas de seguridad** diferentes (por ejemplo, permitir solo lectura por defecto).
- El modelo entiende que modificar datos es una **acción deliberada**, no un subproducto de una consulta.

### 3. SQL ya es expresivo

SQL es un lenguaje completo. Con la capacidad de ejecutar consultas, un modelo de IA puede hacer prácticamente cualquier operación:

```sql
-- Joins complejos
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name
HAVING COUNT(o.id) > 5;

-- Subconsultas y agregaciones
SELECT product_name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);
```

Una herramienta que ejecuta SQL te da acceso a todo el poder del lenguaje.

### 4. Menos superficie de ataque

Cada herramienta expuesta es una puerta de entrada potencial. Al reducir el número de herramientas a dos:

| Más herramientas | Dos herramientas |
|---|---|
| Más código que mantener | Código mínimo y enfocado |
| Difícil de auditar | Fácil de auditar |
| Bugs ocultos en herramientas poco usadas | Superficie reducida de bugs |
| Cada herramienta es un vector de ataque | Dos vectores bien conocidos |

### 5. Experiencia de desarrollo más simple

Para quien integra el servidor MCP en su flujo de trabajo, dos herramientas significan:

- Documentación que se lee en **minutos**, no en horas.
- Menos configuración y menos decisiones.
- Un contrato de interfaz que se entiende de un vistazo.

## El principio detrás de la decisión

Esta decisión sigue un principio de diseño clásico: **la interfaz mínima suficiente**.

No se trata de limitar lo que el usuario puede hacer, sino de ofrecer la interfaz más simple que permita hacer todo lo necesario. Es lo mismo que ocurre con los sistemas de archivos Unix: la mayoría de operaciones se reducen a `read`, `write` y `ls`. No necesitas un comando por cada tipo de archivo o cada operación posible.

## Conclusión

Exponer solo dos herramientas en mis servidores MCP no es una limitación, es una decisión intencional que prioriza:

- **Simplicidad** — para el modelo de IA y para el desarrollador.
- **Seguridad** — al reducir la superficie de ataque.
- **Claridad** — en la separación entre lectura y escritura.
- **Mantenibilidad** — del código del servidor.

> La próxima vez que diseñes una interfaz para IA, pregúntate: ¿puedo hacer esto con menos herramientas? La respuesta probablemente sea sí.
