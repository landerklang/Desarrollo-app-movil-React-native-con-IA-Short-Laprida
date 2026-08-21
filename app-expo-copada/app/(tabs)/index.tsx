import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useScps, ScpAnomaly, ScpClass } from '@/context/ScpContext';

export default function CatalogScreen() {
  const { scps } = useScps();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  // Filtramos los SCPs por número de ítem o palabras clave en la descripción
  const filteredScps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return scps;

    return scps.filter((scp: ScpAnomaly) => {
      const matchItemNumber = scp.itemNumber.toLowerCase().includes(query);
      const matchDescription = scp.description.toLowerCase().includes(query);
      const matchClass = scp.class.toLowerCase().includes(query);
      const matchProcedures = scp.containmentProcedures.toLowerCase().includes(query);
      return matchItemNumber || matchDescription || matchClass || matchProcedures;
    });
  }, [scps, searchQuery]);

  // Obtener el color según la clase del SCP para una estética militar/técnica
  const getClassColor = (scpClass: ScpClass) => {
    switch (scpClass) {
      case 'Safe':
        return '#2ecc71'; // Verde brillante terminal
      case 'Euclid':
        return '#f1c40f'; // Amarillo terminal
      case 'Keter':
        return '#e74c3c'; // Rojo de alerta
      case 'Thaumiel':
        return '#9b59b6'; // Púrpura de misterio
      default:
        return '#95a5a6';
    }
  };

  const renderScpCard = ({ item }: { item: ScpAnomaly }) => {
    const classColor = getClassColor(item.class);

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => router.push(`/${item.id}` as any)}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.itemNumber}>{item.itemNumber}</Text>
          <View style={[styles.classBadge, { borderColor: classColor }]}>
            <Text style={[styles.classText, { color: classColor }]}>
              {item.class.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.cardExcerpt} numberOfLines={3}>
          {item.description}
        </Text>

        <View style={styles.cardFooter}>
          <Text style={styles.readMoreText}>ACCEDER AL REGISTRO_</Text>
          <Ionicons name="chevron-forward" size={16} color="#00ff66" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

      {/* Cabecera estilo Terminal Clasificado */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Ionicons name="shield-checkmark" size={24} color="#00ff66" />
          <Text style={styles.headerTitle}>SECURE. CONTAIN. PROTECT.</Text>
        </View>
        <Text style={styles.headerSubtitle}>BASE DE DATOS DE ANOMALÍAS DE INVESTIGACIÓN</Text>
      </View>

      {/* Barra de Búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por ítem, clase o palabra clave..."
          placeholderTextColor="#555"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close-circle" size={18} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {/* Lista de Anomalías */}
      <FlatList
        data={filteredScps}
        keyExtractor={(item: ScpAnomaly) => item.id}
        renderItem={renderScpCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="alert-circle-outline" size={48} color="#e74c3c" />
            <Text style={styles.emptyTextTitle}>SIN RESULTADOS</Text>
            <Text style={styles.emptyTextSubtitle}>
              Ninguna anomalía registrada coincide con el término de búsqueda ingresado.
            </Text>
          </View>
        }
      />

      {/* Botón Flotante para Agregar (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => router.push('/create')}
      >
        <Ionicons name="add" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // Fondo negro puro terminal
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#00ff66', // Verde fósforo terminal
    letterSpacing: 2,
    fontFamily: 'monospace',
  },
  headerSubtitle: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    letterSpacing: 1,
    fontFamily: 'monospace',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141414',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#222',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 45,
    color: '#00ff66',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  clearButton: {
    padding: 4,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Espacio para el FAB y pestañas
  },
  card: {
    backgroundColor: '#121212',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#222',
    padding: 16,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  classBadge: {
    borderWidth: 1.5,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  classText: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  cardExcerpt: {
    fontSize: 13,
    color: '#aaa',
    lineHeight: 18,
    marginBottom: 15,
    fontFamily: 'monospace',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    paddingTop: 10,
  },
  readMoreText: {
    fontSize: 11,
    color: '#00ff66',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#00ff66', // Verde brillante terminal para resaltar acción de admin
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#00ff66',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  emptyTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginTop: 15,
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  emptyTextSubtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
    fontFamily: 'monospace',
  },
});
